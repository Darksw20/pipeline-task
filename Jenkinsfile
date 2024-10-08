pipeline {
    agent any


    stages {
        stage('Checkout') {
            steps {
                sh: 'git pull'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Server') {
            steps {
                sh 'npm run start'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
