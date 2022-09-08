# In the terminal, run the command ./utility-client.sh arg1 and/or arg2

docker-compose -f utility.docker-compose.yml run --rm npm "$1" "$2"
