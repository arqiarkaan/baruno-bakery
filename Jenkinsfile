pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('arqiarkaan-dockerhub')
  }
  stages {
    stage('Updating local repository') {
      steps {
        dir('C:/COLLEGE/Baruno-Bakery/') {
          script {
            echo 'Pulling latest changes from GitHub...'
            bat 'git config --global --add safe.directory C:/COLLEGE/Baruno-Bakery'
            bat 'git pull origin main'
          }
        }
      }
    }
    stage('Build') {
      steps {
        dir('C:/COLLEGE/Baruno-Bakery/') {
          script {
            echo 'Building Docker image...'
            bat 'docker build -t arqiarkaan/baruno-bakery:latest .'
          }
        }
      }
    }
    stage('Login to Docker Hub') {
      steps {
        script {
            echo 'Logging in to Docker Hub...'
            bat 'docker login -u %DOCKERHUB_CREDENTIALS_USR% -p %DOCKERHUB_CREDENTIALS_PSW%'
        }
      }
    }
    stage('Push to Docker Hub') {
      steps {
          script {
            echo 'Pushing Docker image to Docker Hub...'
            bat 'docker push arqiarkaan/baruno-bakery:latest'
        }
      }
    }
  }
  post {
    always {
        script {
          echo 'Logging out from Docker Hub...'
          bat 'docker logout'
      }
    }
  }
}
