# Тестовое задание
Ссылка: https://versta24.ru/hr/testfordevjun
# Запуск приложения
При выполнении задания использовалась **БД PostgreSQL**.
Перед запуском API необходимо применить миграции с помощью команды `dotnet ef database update --project DataAccess` для **IDE JetBrains Rider** 
или же использовать команду `Update-Database`, выбрав перед этим проект **DataAccess** для **IDE Visual Studio**.

После применения миграций можно запускать API. 
Для запуска клиентской части необходимо перейти в каталог ***/Client/orders-frontend*** и ввести команду `npm start`.
