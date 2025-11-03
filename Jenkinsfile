pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/prince-thakur07/Jenkins-demo'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t nodejs-cicd-demo .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 nodejs-cicd-demo'
            }
        }
    }
}
