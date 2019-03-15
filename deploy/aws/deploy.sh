$(aws ecr get-login --no-include-email --region us-east-2)
docker build -t ajeetj .
aws ecr get-login
docker tag ajeetj:latest 706383057145.dkr.ecr.us-east-2.amazonaws.com/ajeetj:latest
docker push 706383057145.dkr.ecr.us-east-2.amazonaws.com/ajeetj:latest