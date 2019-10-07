#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsCdkAppStack } from '../lib/aws-cdk-app-stack';

const app = new cdk.App();
new AwsCdkAppStack(app, 'AwsCdkAppStack', {
    env: {
        region: 'ap-south-1',
        account: '12345678910'
    }
});
