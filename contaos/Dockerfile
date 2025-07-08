# Usa uma imagem Java como base
FROM openjdk:21

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o JAR gerado para dentro do contêiner
COPY target/contaos-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta 8080 do contêiner
EXPOSE 8080

# Comando para iniciar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
