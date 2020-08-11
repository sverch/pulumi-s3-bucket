import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Get bucket name from configuration
const config = new pulumi.Config();

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket(config.require("bucket-name"));

// Export the name of the bucket
export const bucketName = bucket.id;
