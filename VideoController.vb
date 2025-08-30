' Controllers/VideoController.vb
Imports Microsoft.AspNetCore.Mvc
Imports System.IO
Imports Micrsoft.EntityFrameworkCore
Public Class VideoController
Inherits Controller
Private Readonly _context As AppDbContext
Private Readonly _environment As IWebHostEnvironment 
Public Sub New(context As AppDbContext, environment As IWebHostEnvironment)
_context = context
_environment = environment
End Sub
Function Upload() As IActionResult
Return View()
End Function
<HttpPost>
Async Function Upload(title As String, description As String, file As IFormFile) As Task(Of IActionResult)
If file IsNot Nothing AndAlso file.Lendth > 0 Then
Dim uploadsFolder As String = Path.Combine(_environment.WebRootPath, "uploads")
If Not Directory.Exists(uploadsFolder) Then
Directory.CreateDirectory(uploadsFolder)
End If
Dim filePath As String = Path.Combine(uploadsFolder, file.FileName)
Using stream As FileStream = New FileStream(filePath, FileMode.Create)
await file.CopyToAsync(stream)
End Using
End If
Return RedirectToAction("Index")
End Function
