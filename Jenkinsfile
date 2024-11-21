pipeline {
    agent any

     tools {
        maven 'Maven 3.5.2'
        jdk 'jdk8'
        tools {nodejs "node"}
    }
    
    stages {
        //stage('Checkout') {
        //    steps {
        //        sh 'git pull'
        //    }
        //}

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
