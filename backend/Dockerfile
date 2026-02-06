FROM alpine:3.20

ARG PB_VERSION=0.24.7

RUN apk add --no-cache ca-certificates curl unzip \
  && adduser -D -h /pb -s /sbin/nologin pb

WORKDIR /pb

RUN curl -fsSL "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip" \
  -o /tmp/pb.zip \
  && unzip /tmp/pb.zip -d /pb/ \
  && rm /tmp/pb.zip \
  && chmod +x /pb/pocketbase

COPY pb_migrations /pb/pb_migrations
COPY pb_hooks /pb/pb_hooks

RUN chown -R pb:pb /pb

USER pb

ENV PORT=8080
ENV PB_ORIGINS=

EXPOSE 8080

CMD ["sh", "-c", "/pb/pocketbase serve --http=0.0.0.0:${PORT} --dir=/pb/pb_data --origins=${PB_ORIGINS}"]
