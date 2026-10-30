pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Validate') {
            steps {
                sh '''
                    echo "Checking project files..."

                    test -f index.html
                    test -f css/style.css
                    test -f js/app.js

                    echo "All required files are present."
                '''
            }
        }

        stage('Build Complete') {
            steps {
                echo 'Team India Gallery validation successful!'
            }
        }
    }
}
