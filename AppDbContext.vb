' Models/AppDbContext.vb
Imports Micrsoft.EntityFrameworkCore
Public Class AppDbContext
Inherits DbContext
Public Sub New(options As DbContextOptions(Of AppDbContext))
MyBase.New(options)
End Sub
Public Property Videos As DbSet(Of Video)
End Class
