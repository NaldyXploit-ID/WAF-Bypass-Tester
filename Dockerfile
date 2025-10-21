FROM alpine:3.18
WORKDIR /app
COPY . /app
CMD ["sh","-c","echo demo"]
