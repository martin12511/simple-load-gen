#!groovy 

node {
   stage 'Checkout'
        checkout scm

   stage 'Setup'
        sh 'npm install'

   stage 'Mocha test'
        sh './node_modules/mocha/bin/mocha'

   stage 'Cleanup'
        echo 'prune and cleanup'
        sh 'npm prune'
        sh 'rm node_modules -rf'
        mail body: 'project build successful',
                    from: 'fuzak@moruzza.com',
                    replyTo: 'fuzak@moruzza.com',
                    subject: 'project build successful',
                    to: 'fuzak@moruzza.com'
       }        