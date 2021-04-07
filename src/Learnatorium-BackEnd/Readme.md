Para inicializar el backend del aplicativo Web, deberá primero instalar DENO en su equipo.

Si estás usando linux, usa el comando siguiente:  

    curl -fsSL https://deno.land/x/install/install.sh | s
    
Si estás usando windows, puedes usar la powershell o algún gestor de paquetería como Chocolatey o Scoop

    PowerShell: iwr https://deno.land/x/install/install.ps1 -useb | iex
    Chocolatey: choco install deno
    Scoop: scoop install deno

Si estás usando equipos macs, deberás tener instalado brew previamente y usar el comando:

    brew install deno
  
Una vez instalado, tendrás que abrir el proyecto con Visual Studio Code e instalar un plugin llamado "DENO".

una vez esté instalado el plugin, abra una terminal de Visual Studio code, y diríjase a la carpeta donde se encuentra la API Rest. 
En este caso, sería Learnatorium/src/Learnatorium-BackEnd.

Una vez en ese lugar en la terminal, haga el comando :

    "ls -l" 
    
Deberá una lista de carpetas y un fichero llamado "index.ts". Si no se ha localizado esos documentos,
usted está situado en una carpeta errónea.

*OPCIONAL El siguiente pasó será el de ejecutar el comando para la instalación de denon,que lo que consiste en un addon de deno que reinicia automáticamente el servidor
*si se ha producido alguna modificación en cualquiera de los ficheros.

Para ejecutar el programa, en la terminal deberá introducir el siguiente comando:

    deno run -A --unstable index.ts 
    o
    denon run -A --unstable index.ts ////si se está usando denon.

Por defecto,el servidor trabaja en el puerto 8000 del localhost.

