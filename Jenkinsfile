pipeline {
    agent { 
        node {
            label 'docker-alpine-node'
        }
    }
    triggers {
        // Listen for GitHub push events
        githubPush()
    }
    stages {
        stage('Build') {
            when {
                branch 'main' 
            }
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
            when {
                branch 'main' 
            }
            steps {
                echo "Testing.."
                sh '''
                echo "doing test stuff.."
                '''
            }
        }
        stage('Deliver') {
            when {
                branch 'main'  
            }
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}
