pipeline {
    agent none
    stages {
        stage('Back-end') {
            agent {
                docker { image 'maven:3.8.1-adoptopenjdk-11' }
            }
            steps {
                checkout scm
                sh 'mvn --version'
                sh 'cd /config-server'
            }
        }
        stage('Front-end') {
            agent {
                docker { image 'node:16.13.1-alpine' }
            }
            steps {
                checkout scm
                sh 'node --version'
                sh 'cd /poll-client'
            }
        }
    }
}
