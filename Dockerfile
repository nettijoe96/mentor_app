# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set the environment variables for the database
ENV POSTGRES_DB=app
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=password

# Expose the PostgreSQL port
EXPOSE 5432

# Set the default command to run when starting the container
CMD ["postgres"]
