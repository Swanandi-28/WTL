<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
    <title>Student Data</title>
</head>

<body>
    <h2>Student List</h2>

    <table border="1">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
        </tr>

        <xsl:for-each select="students/student">
        <tr>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="email"/></td>
            <td><xsl:value-of select="course"/></td>
        </tr>
        </xsl:for-each>

    </table>
</body>
</html>

</xsl:template>
</xsl:stylesheet>