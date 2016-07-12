Terminal

https://github.com/dumblob/mysql2sqlite

mysql


mysqldump -B scraper -u access -p[password] > database.sql
./mysql2sqlite.sh database.sql | sqlite3 ./../data.db
