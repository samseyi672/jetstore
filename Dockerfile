FROM openjdk:8

#FROM maven:3.8.2-jdk-8

#FROM 5bf086edab5e9c22e2909c8d05f04da7ceb60b18736b8708d86f21e1c6299728
#VOLUME /redis-service

#COPY src /src

RUN mkdir "app"

WORKDIR /app

#COPY . /app

#EXPOSE 1021

#RUN pwd 

#COPY target/jetstore-0.0.1-SNAPSHOT.jar /app

#WORKDIR /app

#RUN mvn clean install

#CMD mvn spring-boot:run

#ENTRYPOINT ["java","-jar","/app/target/jetstore-0.0.1-SNAPSHOT.jar"]

#ENTRYPOINT ["mvn","spring-boot:run"]

#FROM maven:3.8.2-jdk-8

#WORKDIR /app

#COPY . .

#RUN mvn clean install

#CMD mvn spring-boot:run

#FROM tomcat:9.0.1-jre8-alpine

#RUN rm -rf /usr/local/tomcat/webapps/*

COPY ./target/jetstore-0.0.1-SNAPSHOT.war /app

#EXPOSE 3306

#EXPOSE 1021

#ENV spring.datasource.url=jdbc:mysql://localhost:3306/jetstoredb?createDatabaseIfNotExists=true&autoReconnect=true&allowPublicKeyRetrieval=true&useSSL=false
#ENV spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
#ENV spring.datasource.username=oracle
#ENV spring.datasource.password=oracle
#ENV spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL57Dialect
#ENV spring.jpa.hibernate.ddl-auto=update

#COPY context.xml $TOMCAT_DIR/conf

#CMD ["catalina.sh", "run"]

#compile as war next time 
ENTRYPOINT ["java","-jar","/app/jetstore-0.0.1-SNAPSHOT.war"]




















































































































































































































































