# Simple TCP Web Server in PowerShell (does not require admin privileges to bind to network interfaces)
$port = 8080
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $port)
try {
    $listener.Start()
    $ips = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" }
    Write-Host "Server started successfully on port $port (all interfaces)."
    Write-Host "Local:  http://localhost:$port/"
    foreach ($ipObj in $ips) {
        Write-Host "Mobile/Network: http://$($ipObj.IPAddress):$port/"
    }
    Write-Host "Press Ctrl+C to stop the server."

    while ($true) {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        
        # Simple read loop for request headers
        $reader = [System.IO.StreamReader]::new($stream)
        $line = $reader.ReadLine()
        if ($null -eq $line) { 
            $client.Close()
            continue 
        }
        
        $parts = $line.Split(' ')
        if ($parts.Length -lt 2) { 
            $client.Close()
            continue 
        }
        $urlPath = $parts[1]
        
        # Parse query string or hash out
        $urlPath = $urlPath.Split('?')[0]
        if ($urlPath -eq "/") { $urlPath = "/index.html" }
        
        $filePath = Join-Path $PSScriptRoot $urlPath.TrimStart('/')
        
        $writer = [System.IO.StreamWriter]::new($stream)
        if (Test-Path $filePath -PathType Leaf) {
            $contentType = "application/octet-stream"
            if ($filePath -like "*.html") { $contentType = "text/html; charset=utf-8" }
            elseif ($filePath -like "*.css") { $contentType = "text/css; charset=utf-8" }
            elseif ($filePath -like "*.js") { $contentType = "text/javascript; charset=utf-8" }
            elseif ($filePath -like "*.png") { $contentType = "image/png" }
            elseif ($filePath -like "*.jpg" -or $filePath -like "*.jpeg") { $contentType = "image/jpeg" }
            elseif ($filePath -like "*.svg") { $contentType = "image/svg+xml; charset=utf-8" }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $writer.WriteLine("HTTP/1.1 200 OK")
            $writer.WriteLine("Content-Type: $contentType")
            $writer.WriteLine("Content-Length: $($bytes.Length)")
            $writer.WriteLine("Connection: close")
            $writer.WriteLine()
            $writer.Flush()
            $stream.Write($bytes, 0, $bytes.Length)
        } else {
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $writer.WriteLine("HTTP/1.1 404 Not Found")
            $writer.WriteLine("Content-Type: text/plain; charset=utf-8")
            $writer.WriteLine("Content-Length: $($errBytes.Length)")
            $writer.WriteLine("Connection: close")
            $writer.WriteLine()
            $writer.Flush()
            $stream.Write($errBytes, 0, $errBytes.Length)
        }
        $client.Close()
    }
} catch {
    Write-Error $_.Exception.Message
} finally {
    $listener.Stop()
}
