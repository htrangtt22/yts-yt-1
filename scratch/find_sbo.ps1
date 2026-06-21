# find_sbo.ps1
Select-String -Path .\index.html -Pattern 'id="sbo112"' | Select-Object LineNumber, Line
