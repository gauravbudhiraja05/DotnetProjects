﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SaleProject.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <h2>Welcome to Sale Service</h2>
        <table class="style1">
            <tr>
                <td style="text-align: right">Enter name</td>
                <td>
                    <asp:TextBox ID="TextBox1"
                        runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style2">Address</td>
                <td>
                    <asp:TextBox ID="TextBox2"
                        runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style2">Email ID</td>
                <td>
                    <asp:TextBox ID="TextBox3"
                        runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style2">&nbsp;</td>
                <td>
                    <asp:Button ID="btnSave" runat="server"
                        OnClick="btnSave_Click" Text="Save" />
                </td>
            </tr>
        </table>

        <p>
            <asp:GridView ID="GridView1" runat="server"
                AllowPaging="True" DataKeyNames="CustomerID,CustomerName"
                AllowSorting="True" AutoGenerateDeleteButton="True"
                OnRowDeleting="GridView1_RowDeleting">
            </asp:GridView>
        </p>
        <p>
            <asp:Label ID="Label1" runat="server"
                Text="Label"></asp:Label>
    </form>
</body>
</html>
