# kill_lock.ps1
$file = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\pdf\SBO1.1.3.pdf"
Write-Host "Checking lock on: $file"

# Try to open file exclusively to see if it's locked
try {
    $stream = [System.IO.File]::Open($file, 'Open', 'Write', 'None')
    $stream.Close()
    Write-Host "File is NOT locked."
} catch {
    Write-Host "File IS locked: $_"
    
    # Try to find processes using handle/openfiles or just kill common PDF locks
    # Usually it's edge or chrome or acrobat or node or powershell
    Write-Host "Attempting to release lock by stopping common candidate processes..."
    Get-Process | Where-Object { $_.ProcessName -match "edge|chrome|acrobat|acrord32|foxit|powershell" } | ForEach-Object {
        if ($_.Id -ne $PID) {
            Write-Host "Stopping process: $($_.ProcessName) (ID: $($_.Id))"
            try {
                Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
            } catch {}
        }
    }
}
