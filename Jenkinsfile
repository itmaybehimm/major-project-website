pipeline {
    agent {
        node {
            label 'docker-node-agent-non-ssh'
        }
    }
    environment {
        DOCKER_IMAGE = 'himanshupradhan/major-website'
        DOCKER_TAG = 'latest'
        TARGET_SERVER = '20.197.7.25'  // IP or hostname of the target server
        SSH_USER = 'azureuser'         // SSH user (adjust as needed)
        SSH_KEY_ID = 'ssh-anil'        // Jenkins credentials ID for SSH key
    }
    triggers {
        githubPush()  // Trigger the pipeline on GitHub push
    }
    stages {
        stage('Login to DockerHub') {
            steps {
                echo 'Logging in to DockerHub...'
                withCredentials([usernamePassword(credentialsId: 'himanshupradhan-dockerhub', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image...'
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your testing commands here (e.g., npm install, unit tests)
                sh '''
                echo "Running tests or pre-deployment checks..."
                '''
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                echo 'Pushing Docker Image to DockerHub...'
                sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                script {
                    sshagent([SSH_KEY_ID]) {
                        // Stop and remove the existing Docker container
                        sh """
                            echo 'Stopping and removing the existing Docker container...'
                            ssh -o StrictHostKeyChecking=no ${SSH_USER}@${TARGET_SERVER} "docker stop major-website-container || true"
                            ssh -o StrictHostKeyChecking=no ${SSH_USER}@${TARGET_SERVER} "docker rm major-website-container || true"
                        """

                        // Pull the latest Docker image and run a new container
                        sh """
                            echo 'Pulling the latest Docker image from Docker Hub and deploying the new container...'
                            ssh -o StrictHostKeyChecking=no ${SSH_USER}@${TARGET_SERVER} "docker pull $DOCKER_IMAGE:$DOCKER_TAG"
                            ssh -o StrictHostKeyChecking=no ${SSH_USER}@${TARGET_SERVER} "docker run -d --name major-website-container -p 80:80 $DOCKER_IMAGE:$DOCKER_TAG"
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
