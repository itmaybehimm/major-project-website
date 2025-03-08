pipeline {
    agent { 
        node {
            label 'docker-alpine-node'
        }
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                npm install
                '''
                sh '''
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                echo "doing test stuff.."
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff..   "
                '''
            }
        }
    }
}
