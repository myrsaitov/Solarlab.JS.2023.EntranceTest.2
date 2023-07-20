@ECHO OFF
:: Выполняет команду PUSH для текущего репозитория

:: Заголовок окна - путь и имя файла с аргументами
TITLE %0 %*
ECHO;
ECHO;
ECHO ***************************************************************************
ECHO CMD-FILE: %0 %*
ECHO ***************************************************************************
ECHO;
ECHO;

:: Выполняет команду PUSH
CALL ./../__Git.Scripts.Windows/__private/__git_CMD.cmd --PATH %CD% CALL ./../__Git.Scripts.Windows/__private/__git_check_unpushed_and_push.cmd

PAUSE
