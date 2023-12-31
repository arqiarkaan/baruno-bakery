FROM httpd:2.4

# Salin seluruh konten proyek ke dalam direktori htdocs
COPY . /usr/local/apache2/htdocs/

# Port yang akan diexpose oleh container
EXPOSE 8081

# Perintah yang dijalankan saat container dimulai
CMD ["httpd", "-D", "FOREGROUND"]
