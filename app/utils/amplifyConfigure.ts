"use client"; // this is required

import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });
Auth.configure({ ...awsExports, ssr: true });