// MCQ Quiz Data for AWS SOA-C03 Exam Reviewer
// 3-5 questions per section, 60+ total

const quizData = [
  // ==================== SECTION 0: Amazon EC2 for CloudOps ====================
  {
    sectionId: 0,
    question: "Which EC2 placement group provides the lowest latency between instances?",
    options: ["Spread", "Partition", "Cluster", "Dedicated Host"],
    correctIndex: 2,
    explanation: "Cluster placement groups put instances in the same AZ with 10Gbps Enhanced Networking for lowest latency. Best for HPC and big data jobs."
  },
  {
    sectionId: 0,
    question: "What is the maximum number of instances per AZ in a Spread placement group?",
    options: ["3", "5", "7", "10"],
    correctIndex: 2,
    explanation: "Spread placement groups are limited to 7 instances per AZ per placement group. They isolate each instance on distinct hardware to reduce simultaneous failure risk."
  },
  {
    sectionId: 0,
    question: "Which placement group type supports up to 100s of EC2 instances and is best for Hadoop, Cassandra, and Kafka?",
    options: ["Cluster", "Spread", "Partition", "Dedicated"],
    correctIndex: 2,
    explanation: "Partition placement groups spread instances across many partitions (up to 7 per AZ), each on distinct rack sets. It scales to 100s of EC2 instances and is used by HDFS, HBase, Cassandra, Kafka."
  },
  {
    sectionId: 0,
    question: "Which CloudWatch metric is NOT included by default in EC2 monitoring?",
    options: ["CPU Utilization", "Network In/Out", "RAM Usage", "Disk Read/Write"],
    correctIndex: 2,
    explanation: "RAM (memory) usage is NOT included in default AWS EC2 metrics. You must push it as a custom metric using the Unified CloudWatch Agent."
  },
  {
    sectionId: 0,
    question: "What must be true about an EC2 instance's root EBS volume to use Hibernate?",
    options: ["It must be unencrypted", "It must be encrypted", "It must be an instance store", "It must be at least 1TB"],
    correctIndex: 1,
    explanation: "For EC2 Hibernate, the root EBS volume must be encrypted. Hibernate writes the in-memory RAM state to the root EBS volume, so encryption protects that data."
  },
  {
    sectionId: 0,
    question: "What is the maximum duration an EC2 instance can remain hibernated?",
    options: ["7 days", "30 days", "60 days", "90 days"],
    correctIndex: 2,
    explanation: "An EC2 instance cannot be hibernated for more than 60 days."
  },

  // ==================== SECTION 1: Amazon Machine Image (AMI) ====================
  {
    sectionId: 1,
    question: "What does enabling the AMI 'No-Reboot' option mean?",
    options: [
      "AWS will shut down the instance before creating an AMI",
      "The AMI is created without shutting down the instance, but OS buffers may not be flushed",
      "The instance cannot be rebooted after AMI creation",
      "The AMI will only work on stopped instances"
    ],
    correctIndex: 1,
    explanation: "With No-Reboot enabled, AWS creates an AMI without shutting down the instance. This means OS buffers are not flushed to disk before the snapshot, which may affect file system integrity."
  },
  {
    sectionId: 1,
    question: "When sharing an AMI with encrypted volumes to another account, what must also be shared?",
    options: ["The EC2 instance", "The S3 bucket", "The customer managed KMS keys used to encrypt", "The IAM role"],
    correctIndex: 2,
    explanation: "When sharing an AMI with encrypted volumes, you must also share the customer managed keys (CMKs) used to encrypt them. AWS managed keys cannot be shared."
  },
  {
    sectionId: 1,
    question: "Which service automates the creation, maintenance, validation and testing of EC2 AMIs on a schedule?",
    options: ["AWS Backup", "AWS CodeBuild", "EC2 Image Builder", "AWS CloudFormation"],
    correctIndex: 2,
    explanation: "EC2 Image Builder automates the creation, maintenance, validation, and testing of EC2 AMIs. It's a free service—you only pay for the underlying resources used."
  },
  {
    sectionId: 1,
    question: "To copy an AMI that was shared with your account, what permission must the AMI owner grant you?",
    options: [
      "iam:PassRole permission",
      "Read permissions for the EBS snapshot backing the AMI",
      "Write access to the source S3 bucket",
      "Access to the source EC2 instance"
    ],
    correctIndex: 1,
    explanation: "To copy a shared AMI, the owner must grant you read permissions for the EBS snapshot that backs the AMI. If it's encrypted, they must also share the encryption keys."
  },

  // ==================== SECTION 2: AWS Systems Manager (SSM) ====================
  {
    sectionId: 2,
    question: "Which SSM feature allows you to run scripts across multiple EC2 instances without SSH access?",
    options: ["Session Manager", "Run Command", "State Manager", "Patch Manager"],
    correctIndex: 1,
    explanation: "SSM Run Command executes scripts or commands across multiple instances using resource groups, with no SSH required. Output can go to S3 or CloudWatch Logs."
  },
  {
    sectionId: 2,
    question: "In SSM Parameter Store, what is the maximum size of a parameter value in the Standard tier?",
    options: ["1 KB", "4 KB", "8 KB", "16 KB"],
    correctIndex: 1,
    explanation: "In the Standard tier, SSM Parameter Store allows a maximum parameter value size of 4 KB. The Advanced tier allows up to 8 KB."
  },
  {
    sectionId: 2,
    question: "How many parameters are allowed in SSM Parameter Store Standard tier per account per region?",
    options: ["1,000", "5,000", "10,000", "100,000"],
    correctIndex: 2,
    explanation: "SSM Parameter Store Standard tier allows up to 10,000 parameters per AWS account per region. Advanced tier allows up to 100,000."
  },
  {
    sectionId: 2,
    question: "Which SSM feature automates patching of managed instances and can generate compliance reports?",
    options: ["Run Command", "State Manager", "Patch Manager", "Distributor"],
    correctIndex: 2,
    explanation: "SSM Patch Manager automates the patching process, supports on-demand or scheduled patching via Maintenance Windows, and can generate patch compliance reports sent to S3."
  },
  {
    sectionId: 2,
    question: "Which SSM feature provides secure shell access to EC2 instances without requiring SSH keys or open port 22?",
    options: ["Fleet Manager", "Run Command", "Session Manager", "Automation"],
    correctIndex: 2,
    explanation: "SSM Session Manager provides secure shell access without SSH keys, bastion hosts, or open port 22. Sessions can be logged to S3 or CloudWatch Logs."
  },

  // ==================== SECTION 3: High Availability & Scalability ====================
  {
    sectionId: 3,
    question: "Which Load Balancer type operates at Layer 7 and supports path-based routing?",
    options: ["Classic Load Balancer", "Network Load Balancer", "Application Load Balancer", "Gateway Load Balancer"],
    correctIndex: 2,
    explanation: "Application Load Balancer (ALB) operates at Layer 7 (HTTP) and supports routing based on URL path, hostname, query strings, and headers."
  },
  {
    sectionId: 3,
    question: "Which Load Balancer type uses the GENEVE protocol on port 6081?",
    options: ["Application Load Balancer", "Network Load Balancer", "Classic Load Balancer", "Gateway Load Balancer"],
    correctIndex: 3,
    explanation: "Gateway Load Balancer uses the GENEVE protocol on port 6081. It operates at Layer 3 and is used to deploy, scale, and manage third-party network virtual appliances."
  },
  {
    sectionId: 3,
    question: "What is the default ASG scaling cooldown period after a scaling activity?",
    options: ["60 seconds", "180 seconds", "300 seconds", "600 seconds"],
    correctIndex: 2,
    explanation: "The default cooldown period for Auto Scaling Groups is 300 seconds (5 minutes). During this time, the ASG will not launch or terminate additional instances to allow metrics to stabilize."
  },
  {
    sectionId: 3,
    question: "Which ALB cookie name is used for duration-based sticky sessions?",
    options: ["AWSALBTG", "AWSALBAPP", "AWSALB", "AWSELB"],
    correctIndex: 2,
    explanation: "For ALB duration-based sticky sessions, the cookie name is AWSALB. For CLB, the cookie name is AWSELB. AWSALBAPP is for application-based stickiness."
  },
  {
    sectionId: 3,
    question: "What connection draining time range is available for ALB/NLB deregistration delay?",
    options: ["0 to 600 seconds", "1 to 3600 seconds", "60 to 1800 seconds", "0 to 86400 seconds"],
    correctIndex: 1,
    explanation: "Connection Draining (CLB) or Deregistration Delay (ALB/NLB) can be set between 1 to 3600 seconds. The default is 300 seconds. Setting it to 0 disables the feature."
  },

  // ==================== SECTION 4: AWS CloudFormation ====================
  {
    sectionId: 4,
    question: "What happens when a CloudFormation stack deletion fails because an S3 bucket is not empty?",
    options: [
      "CloudFormation automatically empties the bucket",
      "The deletion fails with DELETE_FAILED status",
      "The bucket is archived to Glacier",
      "CloudFormation retries deletion for 24 hours"
    ],
    correctIndex: 1,
    explanation: "DELETE_FAILED occurs when S3 buckets aren't empty before deletion. You can use DeletionPolicy=Retain to skip the deletion, or use a Custom Resource with Lambda to empty the bucket first."
  },
  {
    sectionId: 4,
    question: "Which CloudFormation DeletionPolicy creates a final snapshot before deleting the resource?",
    options: ["Delete", "Retain", "Snapshot", "Archive"],
    correctIndex: 2,
    explanation: "DeletionPolicy=Snapshot creates a final snapshot before deleting resources like EBS Volumes, RDS instances, ElastiCache clusters, Redshift clusters, etc."
  },
  {
    sectionId: 4,
    question: "What is CloudFormation Drift detection used for?",
    options: [
      "Detecting network latency in CloudFormation deployments",
      "Identifying manual configuration changes made outside CloudFormation",
      "Monitoring CloudFormation stack costs",
      "Detecting security vulnerabilities in templates"
    ],
    correctIndex: 1,
    explanation: "CloudFormation Drift detection identifies resources that have been manually changed outside of CloudFormation, showing differences between the expected and actual configuration."
  },
  {
    sectionId: 4,
    question: "What capability is required when a CloudFormation template creates named IAM resources?",
    options: ["CAPABILITY_IAM", "CAPABILITY_NAMED_IAM", "CAPABILITY_AUTO_EXPAND", "CAPABILITY_RESOURCE_POLICY"],
    correctIndex: 1,
    explanation: "CAPABILITY_NAMED_IAM is required when your template creates or updates named IAM resources (Users, Roles, Groups, Policies). CAPABILITY_IAM is for unnamed IAM resources."
  },
  {
    sectionId: 4,
    question: "What is the difference between CloudFormation Cross Stacks and Nested Stacks?",
    options: [
      "Cross Stacks use Fn::Import; Nested Stacks use Fn::GetAtt",
      "Cross Stacks use Outputs Export/ImportValue for shared resources with different lifecycles; Nested Stacks reuse components in a single hierarchy",
      "Cross Stacks require StackSets; Nested Stacks don't",
      "They are identical—the terms are interchangeable"
    ],
    correctIndex: 1,
    explanation: "Cross Stacks use Outputs Export and Fn::ImportValue to share resources between stacks with different lifecycles. Nested Stacks embed reusable components within a parent stack hierarchy."
  },

  // ==================== SECTION 5: AWS Lambda ====================
  {
    sectionId: 5,
    question: "What is the maximum memory (RAM) you can allocate to an AWS Lambda function?",
    options: ["1 GB", "3 GB", "6 GB", "10 GB"],
    correctIndex: 3,
    explanation: "AWS Lambda supports up to 10 GB of RAM per function. Increasing RAM also improves CPU and network performance proportionally."
  },
  {
    sectionId: 5,
    question: "What is the Lambda free tier for compute time per month?",
    options: ["100,000 GB-seconds", "400,000 GB-seconds", "1,000,000 GB-seconds", "10,000,000 GB-seconds"],
    correctIndex: 1,
    explanation: "Lambda's free tier includes 400,000 GB-seconds of compute time per month. For a 1GB function, that's 400,000 seconds. For a 128MB function, it's 3,200,000 seconds."
  },
  {
    sectionId: 5,
    question: "What is the free tier for Lambda request count per month?",
    options: ["100,000 requests", "500,000 requests", "1,000,000 requests", "10,000,000 requests"],
    correctIndex: 2,
    explanation: "Lambda's free tier includes 1,000,000 requests per month. Beyond the free tier, it's $0.20 per 1 million requests ($0.0000002 per request)."
  },

  // ==================== SECTION 6: EC2 Storage & Data Management ====================
  {
    sectionId: 6,
    question: "What is the maximum IOPS for an io2 Block Express EBS volume?",
    options: ["32,000 IOPS", "64,000 IOPS", "256,000 IOPS", "1,000,000 IOPS"],
    correctIndex: 2,
    explanation: "io2 Block Express EBS volumes support up to 256,000 IOPS with an IOPS:GiB ratio of 1,000:1 and sub-millisecond latency."
  },
  {
    sectionId: 6,
    question: "Which EBS volume type provides a baseline of 3,000 IOPS and allows independent scaling of IOPS up to 16,000?",
    options: ["gp2", "gp3", "io1", "st1"],
    correctIndex: 1,
    explanation: "gp3 provides a baseline of 3,000 IOPS and 125 MiB/s throughput, with the ability to independently scale IOPS up to 16,000 and throughput up to 1,000 MiB/s."
  },
  {
    sectionId: 6,
    question: "What is the retention period for deleted EBS snapshots in the Recycle Bin?",
    options: ["1 hour to 7 days", "1 day to 1 year", "7 days to 30 days", "30 days to 1 year"],
    correctIndex: 1,
    explanation: "The EBS Snapshot Recycle Bin allows you to specify a retention period from 1 day to 1 year for recovering accidentally deleted snapshots."
  },
  {
    sectionId: 6,
    question: "Which EFS throughput mode automatically scales throughput up and down based on workloads?",
    options: ["Bursting", "Provisioned", "Elastic", "Adaptive"],
    correctIndex: 2,
    explanation: "EFS Elastic throughput mode automatically scales throughput up to 3 GiB/s for reads and 1 GiB/s for writes based on workload. Best for unpredictable workloads."
  },
  {
    sectionId: 6,
    question: "How much cost savings does EFS One Zone-IA offer compared to standard storage?",
    options: ["50% cheaper", "75% cheaper", "Over 90% cheaper", "30% cheaper"],
    correctIndex: 2,
    explanation: "EFS One Zone with Infrequent Access (EFS One Zone-IA) offers over 90% in cost savings. The Archive tier is about 50% cheaper than standard EFS."
  },

  // ==================== SECTION 7: Amazon S3 ====================
  {
    sectionId: 7,
    question: "What is the maximum object size in Amazon S3?",
    options: ["1 TB", "5 TB", "10 TB", "Unlimited"],
    correctIndex: 1,
    explanation: "The maximum object size in Amazon S3 is 5 TB (5,000 GB). For objects larger than 5 GB, you must use multi-part upload."
  },
  {
    sectionId: 7,
    question: "What is the baseline S3 performance for PUT/COPY/POST/DELETE requests per second per prefix?",
    options: ["1,000", "3,500", "5,500", "10,000"],
    correctIndex: 1,
    explanation: "S3 automatically scales to at least 3,500 PUT/COPY/POST/DELETE requests per second per prefix, and 5,500 GET/HEAD requests per second per prefix."
  },
  {
    sectionId: 7,
    question: "For S3 Cross-Region Replication (CRR), what must be enabled on both source and destination buckets?",
    options: ["Encryption", "Versioning", "Lifecycle rules", "Event notifications"],
    correctIndex: 1,
    explanation: "S3 Replication (both CRR and SRR) requires Versioning to be enabled on both the source and destination buckets."
  },
  {
    sectionId: 7,
    question: "How long does S3 Replication Time Control (RTC) guarantee replication of 99.99% of objects?",
    options: ["5 minutes", "15 minutes", "30 minutes", "1 hour"],
    correctIndex: 1,
    explanation: "S3 Replication Time Control (RTC) guarantees that 99.99% of new objects are replicated within 15 minutes, providing predictable and auditable replication times."
  },

  // ==================== SECTION 8: Amazon S3 – Advanced & Security ====================
  {
    sectionId: 8,
    question: "What is the maximum number of parts for S3 Multi-Part Upload?",
    options: ["1,000", "5,000", "10,000", "50,000"],
    correctIndex: 2,
    explanation: "S3 Multi-Part Upload supports a maximum of 10,000 parts. It is recommended for files >100MB and required for files >5GB."
  },
  {
    sectionId: 8,
    question: "What is the pricing for Amazon Athena?",
    options: ["$1.00 per TB scanned", "$5.00 per TB scanned", "$10.00 per TB scanned", "$0.25 per query"],
    correctIndex: 1,
    explanation: "Amazon Athena charges $5.00 per TB of data scanned. You can reduce costs by using columnar data formats (Parquet, ORC), compressing data, and partitioning datasets."
  },
  {
    sectionId: 8,
    question: "Which S3 Object Lock mode prevents deletion by ANY user including root, and cannot be shortened?",
    options: ["Governance mode", "Compliance mode", "Legal Hold", "WORM mode"],
    correctIndex: 1,
    explanation: "S3 Object Lock Compliance mode prevents any user, including root, from overwriting or deleting object versions. Retention periods cannot be shortened or changed."
  },
  {
    sectionId: 8,
    question: "Who is the only person who can enable/disable S3 MFA Delete?",
    options: ["Any IAM admin user", "The bucket owner (root account only)", "Any user with s3:PutBucketVersioning permission", "AWS Support"],
    correctIndex: 1,
    explanation: "Only the bucket owner (root account) can enable or disable MFA Delete on an S3 bucket. MFA Delete requires Versioning to be enabled."
  },

  // ==================== SECTION 9: Advanced Storage Solutions ====================
  {
    sectionId: 9,
    question: "Which FSx file system is optimized for Windows workloads and supports SMB and NTFS?",
    options: ["FSx for Lustre", "FSx for OpenZFS", "FSx for Windows File Server", "FSx for NetApp ONTAP"],
    correctIndex: 2,
    explanation: "Amazon FSx for Windows File Server is a fully managed Windows file system supporting SMB protocol, Windows NTFS, Microsoft Active Directory integration, and DFS Namespaces."
  },
  {
    sectionId: 9,
    question: "What is the maximum IOPS for Amazon FSx for OpenZFS?",
    options: ["100,000 IOPS", "500,000 IOPS", "1,000,000 IOPS", "10,000,000 IOPS"],
    correctIndex: 2,
    explanation: "Amazon FSx for OpenZFS supports up to 1,000,000 IOPS with less than 0.5ms latency. It is compatible with NFS v3, v4, v4.1, and v4.2."
  },
  {
    sectionId: 9,
    question: "Which AWS Storage Gateway type uses iSCSI protocol and is backed by EBS snapshots?",
    options: ["S3 File Gateway", "Volume Gateway", "Tape Gateway", "FSx File Gateway"],
    correctIndex: 1,
    explanation: "Volume Gateway uses iSCSI protocol and is backed by EBS snapshots. It has two modes: Cached volumes (low latency for recent data) and Stored volumes (entire dataset on-premises)."
  },
  {
    sectionId: 9,
    question: "What is the bandwidth of a single AWS DataSync agent task?",
    options: ["1 Gbps", "5 Gbps", "10 Gbps", "100 Gbps"],
    correctIndex: 2,
    explanation: "One AWS DataSync agent task can use up to 10 Gbps. You can set a bandwidth limit and schedule replication tasks hourly, daily, or weekly."
  },

  // ==================== SECTION 10: Amazon CloudFront ====================
  {
    sectionId: 10,
    question: "What does CloudFront Origin Shield do?",
    options: [
      "Encrypts traffic between edge locations and the origin",
      "Adds an extra caching layer between regional edge locations and the origin to minimize origin load",
      "Provides DDoS protection for the origin",
      "Restricts access to the origin by geo-blocking"
    ],
    correctIndex: 1,
    explanation: "CloudFront Origin Shield is an additional caching layer between regional edge locations and your origin. It combines multiple requests for the same object into a single request, reducing origin load and costs."
  },
  {
    sectionId: 10,
    question: "Which AWS service provides two Anycast static IPs for global routing and faster failover?",
    options: ["CloudFront", "Route 53", "AWS Global Accelerator", "AWS Transit Gateway"],
    correctIndex: 2,
    explanation: "AWS Global Accelerator provides 2 Anycast IP addresses that send traffic directly to AWS edge locations, then routes via the private AWS network to your application for lower latency and fast failover (<1 minute)."
  },
  {
    sectionId: 10,
    question: "Which CloudFront feature allows you to invalidate cached content before the TTL expires?",
    options: ["Cache Reset", "Cache Busting", "CreateInvalidation API", "PurgeCache API"],
    correctIndex: 2,
    explanation: "You can use the CreateInvalidation API to force CloudFront to fetch fresh content from the origin before the TTL expires. You can invalidate all files (*) or specific paths (/images/*)."
  },
  {
    sectionId: 10,
    question: "What does SNI (Server Name Indication) enable on ALB and NLB?",
    options: [
      "It allows multiple EC2 instances behind one load balancer",
      "It allows multiple SSL certificates on one listener for different domains",
      "It enables HTTP/2 support",
      "It provides end-to-end encryption between clients and EC2"
    ],
    correctIndex: 1,
    explanation: "SNI solves the problem of loading multiple SSL certificates onto one web server. Clients indicate the target hostname in the SSL handshake. SNI works with ALB, NLB, and CloudFront—not CLB."
  },

  // ==================== SECTION 11: Databases in AWS ====================
  {
    sectionId: 11,
    question: "What is the maximum number of Read Replicas supported by Amazon RDS?",
    options: ["5", "10", "15", "20"],
    correctIndex: 2,
    explanation: "Amazon RDS supports up to 15 Read Replicas within AZ, cross-AZ, or cross-region. Replication is asynchronous (ASYNC), meaning reads are eventually consistent."
  },
  {
    sectionId: 11,
    question: "What storage auto-scaling trigger requires for RDS to scale automatically?",
    options: [
      "Storage is less than 20% free",
      "Free storage < 10%, low storage for 5+ minutes, 6 hours since last modification",
      "Any manual scaling request from CloudWatch",
      "CPU exceeds 80% for 10 minutes"
    ],
    correctIndex: 1,
    explanation: "RDS Storage Auto Scaling triggers when: free storage < 10% of allocated storage, low-storage lasts at least 5 minutes, AND 6 hours have passed since the last modification."
  },
  {
    sectionId: 11,
    question: "How many copies of Aurora data are stored across how many AZs?",
    options: ["3 copies across 2 AZs", "4 copies across 2 AZs", "6 copies across 3 AZs", "9 copies across 3 AZs"],
    correctIndex: 2,
    explanation: "Aurora stores 6 copies of your data across 3 AZs. It needs 4 copies out of 6 for writes and 3 copies out of 6 for reads. Storage is striped across 100s of volumes."
  },
  {
    sectionId: 11,
    question: "What is Aurora Backtracking and what is its maximum rewind time?",
    options: [
      "Restores to a new cluster; up to 35 days",
      "In-place rewind of the DB cluster; up to 72 hours",
      "Creates a point-in-time snapshot; unlimited",
      "Clones the database; up to 7 days"
    ],
    correctIndex: 1,
    explanation: "Aurora Backtracking rewinds the DB cluster back and forth in time without creating a new DB cluster (in-place restore). It supports up to 72 hours of rewind and is available for Aurora MySQL only."
  },
  {
    sectionId: 11,
    question: "By how much does Amazon RDS Proxy reduce RDS and Aurora failover time?",
    options: ["Up to 25%", "Up to 50%", "Up to 66%", "Up to 90%"],
    correctIndex: 2,
    explanation: "Amazon RDS Proxy reduces RDS and Aurora failover time by up to 66% by maintaining a pool of database connections, so applications don't need to reconnect from scratch."
  },

  // ==================== SECTION 12: AWS Monitoring, Audit & Performance ====================
  {
    sectionId: 12,
    question: "How long does CloudTrail retain events by default?",
    options: ["30 days", "60 days", "90 days", "365 days"],
    correctIndex: 2,
    explanation: "CloudTrail retains events for 90 days by default. To retain events longer, you must log them to S3 and can analyze them with Athena."
  },
  {
    sectionId: 12,
    question: "What is the maximum number of dimensions per CloudWatch metric?",
    options: ["10", "20", "30", "50"],
    correctIndex: 2,
    explanation: "CloudWatch supports up to 30 dimensions per metric. Dimensions are attributes used to segment and filter metrics (e.g., instance ID, environment)."
  },
  {
    sectionId: 12,
    question: "CloudWatch Log exports to S3 using CreateExportTask can take up to how long?",
    options: ["1 hour", "6 hours", "12 hours", "24 hours"],
    correctIndex: 2,
    explanation: "CloudWatch Logs data can take up to 12 hours to become available for export using CreateExportTask. For near-real-time delivery, use CloudWatch Logs Subscriptions instead."
  },
  {
    sectionId: 12,
    question: "Which AWS Config pricing model applies?",
    options: [
      "Free tier: 10 rules, then $0.01/rule/month",
      "No free tier: $0.003 per configuration item recorded, $0.001 per config rule evaluation",
      "Flat $5/month per region",
      "Pay per compliance check only"
    ],
    correctIndex: 1,
    explanation: "AWS Config has no free tier. Pricing is $0.003 per configuration item recorded per region and $0.001 per config rule evaluation per region."
  },
  {
    sectionId: 12,
    question: "Within how many minutes of an API call does CloudTrail deliver an event to S3?",
    options: ["2 minutes", "5 minutes", "15 minutes", "30 minutes"],
    correctIndex: 2,
    explanation: "CloudTrail delivers events to S3 every 5 minutes and delivers log entries within 15 minutes of an API call. CloudTrail is not real-time."
  },

  // ==================== SECTION 13: AWS Account Management ====================
  {
    sectionId: 13,
    question: "What is the maximum number of VPCs per AWS region (soft limit)?",
    options: ["3", "5", "10", "20"],
    correctIndex: 1,
    explanation: "By default, you can have up to 5 VPCs per AWS region (soft limit). This can be increased by contacting AWS Support."
  },
  {
    sectionId: 13,
    question: "AWS Service Control Policies (SCPs) apply to which entities?",
    options: [
      "Only IAM users",
      "Only IAM roles",
      "IAM users and roles in member accounts (not the management account)",
      "All AWS resources including services"
    ],
    correctIndex: 2,
    explanation: "SCPs apply to IAM users and roles in member accounts. They do NOT apply to the management account (which has full admin power) and do NOT grant permissions—they only restrict them."
  },
  {
    sectionId: 13,
    question: "Which AWS service provides a one-stop view of Trusted Advisor checks across all accounts in an AWS Organization?",
    options: ["AWS Config Aggregator", "AWS Security Hub", "Trusted Advisor Organizational View", "AWS Control Tower"],
    correctIndex: 2,
    explanation: "Trusted Advisor Organizational View lets you view all Trusted Advisor checks across all accounts in an AWS Organization. It requires Business, Enterprise On-Ramp, or Enterprise Support plans."
  },
  {
    sectionId: 13,
    question: "What is the cost of AWS Budgets after the free tier?",
    options: ["$0.01/day/budget", "$0.02/day/budget", "$0.10/day/budget", "$1.00/month/budget"],
    correctIndex: 1,
    explanation: "The first 2 budgets in AWS Budgets are free. After that, it costs $0.02/day per budget. You can create up to 5 SNS notifications per budget."
  },

  // ==================== SECTION 14: Disaster Recovery ====================
  {
    sectionId: 14,
    question: "Which AWS Backup feature enforces WORM (Write Once Read Many) and prevents even root from deleting backups?",
    options: ["Backup Lock", "Backup Vault Lock", "Backup Protection", "Backup Shield"],
    correctIndex: 1,
    explanation: "AWS Backup Vault Lock enforces a WORM state for all backups in an AWS Backup Vault. Even the root user cannot delete backups when Vault Lock is enabled."
  },
  {
    sectionId: 14,
    question: "What is the recovery time objective (RTO) for promoting an Aurora Global Database secondary region to primary for disaster recovery?",
    options: ["< 30 seconds", "< 1 minute", "< 5 minutes", "< 15 minutes"],
    correctIndex: 1,
    explanation: "Promoting an Aurora Global Database secondary region for disaster recovery has an RTO of less than 1 minute. Typical cross-region replication takes less than 1 second."
  },
  {
    sectionId: 14,
    question: "What types of backups does AWS Backup support for RDS?",
    options: [
      "Only manual snapshots",
      "Only automated backups",
      "All DB engines, including Aurora, with PITR support",
      "Only MySQL and PostgreSQL"
    ],
    correctIndex: 2,
    explanation: "AWS Backup supports all RDS database engines (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, IBM DB2) and Aurora. It supports PITR (Point-In-Time Recovery) for supported services."
  },

  // ==================== SECTION 15: Security & Compliance ====================
  {
    sectionId: 15,
    question: "What is the cost of AWS Shield Advanced per month per organization?",
    options: ["$500/month", "$1,000/month", "$3,000/month", "$10,000/month"],
    correctIndex: 2,
    explanation: "AWS Shield Advanced costs $3,000 per month per organization. It provides 24/7 access to the AWS DDoS Response Team (DRP) and protects against higher fees during DDoS-driven usage spikes."
  },
  {
    sectionId: 15,
    question: "Which service automatically rotates secrets and integrates natively with RDS?",
    options: ["SSM Parameter Store", "AWS KMS", "AWS Secrets Manager", "AWS Certificate Manager"],
    correctIndex: 2,
    explanation: "AWS Secrets Manager can automatically rotate secrets on a schedule using Lambda functions. It has native integration with RDS, Redshift, and DocumentDB for automated credential rotation."
  },
  {
    sectionId: 15,
    question: "What is the waiting period range for KMS Customer Managed Key deletion scheduling?",
    options: ["1 to 7 days", "7 to 30 days", "30 to 90 days", "1 to 365 days"],
    correctIndex: 1,
    explanation: "You can schedule CMK deletion with a waiting period of 7 to 30 days. During this period, the key cannot perform cryptographic operations. You can cancel the deletion during this window."
  },
  {
    sectionId: 15,
    question: "What is the rotation period range for Customer-Managed Symmetric KMS key automatic rotation?",
    options: ["30 to 365 days", "90 to 2560 days", "365 to 1825 days", "1 to 90 days"],
    correctIndex: 1,
    explanation: "For Customer-Managed Symmetric KMS Keys, automatic rotation can be customized between 90 and 2560 days (default: 365 days). AWS-managed KMS Keys auto-rotate every 1 year."
  },
  {
    sectionId: 15,
    question: "Amazon GuardDuty provides which type of threat detection for cryptocurrency attacks?",
    options: [
      "It has no specific cryptocurrency detection",
      "It has a dedicated finding for CryptoCurrency attacks",
      "It uses AWS WAF rules for crypto detection",
      "It requires manual configuration for crypto detection"
    ],
    correctIndex: 1,
    explanation: "Amazon GuardDuty can protect against CryptoCurrency attacks and has a dedicated 'finding' for it. GuardDuty uses ML algorithms, anomaly detection, and 3rd party data for intelligent threat discovery."
  },

  // ==================== SECTION 16: Identity ====================
  {
    sectionId: 16,
    question: "How long are temporary credentials from AWS STS valid?",
    options: ["5 minutes to 30 minutes", "15 minutes to 1 hour", "1 hour to 12 hours", "1 hour to 36 hours"],
    correctIndex: 1,
    explanation: "Temporary security credentials from AWS STS are valid for between 15 minutes and 1 hour. They must be refreshed after expiration."
  },
  {
    sectionId: 16,
    question: "Which IAM Security Tool shows the service permissions granted to a user and when those services were last accessed?",
    options: ["IAM Credentials Report", "IAM Access Advisor", "IAM Policy Simulator", "IAM Access Analyzer"],
    correctIndex: 1,
    explanation: "IAM Access Advisor (user-level) shows the service permissions granted to a user and when those services were last accessed. This helps you implement least-privilege by identifying unused permissions."
  },
  {
    sectionId: 16,
    question: "IAM Permission Boundaries can be applied to which IAM entities?",
    options: ["Users and groups", "Groups and roles", "Users and roles (not groups)", "All IAM entities including groups"],
    correctIndex: 2,
    explanation: "IAM Permission Boundaries are supported for IAM users and roles only—not groups. They set the maximum permissions an IAM entity can get, regardless of attached policies."
  },

  // ==================== SECTION 17: Amazon Route 53 ====================
  {
    sectionId: 17,
    question: "What is the only AWS service with a 100% availability SLA?",
    options: ["Amazon S3", "Amazon CloudFront", "Amazon Route 53", "Amazon RDS Multi-AZ"],
    correctIndex: 2,
    explanation: "Amazon Route 53 is the only AWS service that provides a 100% availability SLA. The name '53' refers to the traditional DNS port number."
  },
  {
    sectionId: 17,
    question: "Which Route 53 routing policy routes traffic based on the geographic location of users, not latency?",
    options: ["Latency-based", "Geoproximity", "Geolocation", "IP-based"],
    correctIndex: 2,
    explanation: "Geolocation routing is based on user location (continent, country, or US state). This differs from Latency-based routing which routes based on lowest latency, and Geoproximity which uses bias values."
  },
  {
    sectionId: 17,
    question: "What is the monthly cost for a Route 53 hosted zone?",
    options: ["Free", "$0.10/month", "$0.50/month", "$1.00/month"],
    correctIndex: 2,
    explanation: "Route 53 charges $0.50 per hosted zone per month for the first 25 hosted zones, and $0.10 per hosted zone per month for additional zones."
  },
  {
    sectionId: 17,
    question: "Route 53 Geoproximity routing requires which feature to shift traffic based on bias values?",
    options: ["Route 53 Health Checks", "Route 53 Traffic Flow", "Route 53 Resolver", "Route 53 Alias records"],
    correctIndex: 1,
    explanation: "Route 53 Geoproximity routing requires Route 53 Traffic Flow to use bias values (-99 to 99) to expand or shrink the geographic region for routing traffic."
  },

  // ==================== SECTION 18: Amazon VPC ====================
  {
    sectionId: 18,
    question: "How many IP addresses does AWS reserve in each VPC subnet?",
    options: ["2", "3", "5", "8"],
    correctIndex: 2,
    explanation: "AWS reserves 5 IP addresses in each subnet: Network Address, VPC Router, Amazon DNS, future use, and Network Broadcast Address. These cannot be assigned to EC2 instances."
  },
  {
    sectionId: 18,
    question: "What is the bandwidth of a NAT Gateway with automatic scaling?",
    options: ["1 Gbps to 10 Gbps", "5 Gbps to 45 Gbps", "5 Gbps to 100 Gbps", "10 Gbps to 100 Gbps"],
    correctIndex: 2,
    explanation: "A NAT Gateway starts with 5 Gbps of bandwidth and automatically scales up to 100 Gbps. Unlike NAT Instances, NAT Gateways are highly available within a single AZ."
  },
  {
    sectionId: 18,
    question: "What does a VPC Peering connection NOT support?",
    options: [
      "Cross-account connections",
      "Cross-region connections",
      "Transitive routing through a third VPC",
      "Security group references in peered VPCs"
    ],
    correctIndex: 2,
    explanation: "VPC Peering is NOT transitive. If VPC-A is peered with VPC-B, and VPC-B is peered with VPC-C, traffic from VPC-A cannot reach VPC-C through VPC-B. You must establish direct peering for each pair."
  },
  {
    sectionId: 18,
    question: "Which VPC endpoint type is free and only supports Amazon S3 and DynamoDB?",
    options: ["Interface Endpoint", "Gateway Endpoint", "PrivateLink Endpoint", "Service Endpoint"],
    correctIndex: 1,
    explanation: "Gateway Endpoints are free and only support Amazon S3 and DynamoDB. They are provisioned as a gateway in route tables. Interface Endpoints (powered by PrivateLink) cost per hour and per GB."
  },
  {
    sectionId: 18,
    question: "What is the bandwidth per tunnel for an AWS Site-to-Site VPN connection?",
    options: ["100 Mbps", "500 Mbps", "1.25 Gbps", "10 Gbps"],
    correctIndex: 2,
    explanation: "Each AWS Site-to-Site VPN connection provides 1.25 Gbps per tunnel (with 2 tunnels = 2.5 Gbps with ECMP). Using Transit Gateway with ECMP can combine multiple VPN connections for higher throughput."
  },

  // ==================== SECTION 19: Other Services ====================
  {
    sectionId: 19,
    question: "What is the default message retention period in Amazon SQS?",
    options: ["1 day", "4 days", "7 days", "14 days"],
    correctIndex: 1,
    explanation: "The default SQS message retention period is 4 days. It can be set from 1 minute to 14 days. Messages are automatically deleted after the retention period expires."
  },
  {
    sectionId: 19,
    question: "What is the maximum number of SNS subscriptions per topic?",
    options: ["100,000", "1,000,000", "12,500,000", "Unlimited"],
    correctIndex: 2,
    explanation: "Amazon SNS supports up to 12,500,000 subscriptions per topic, and up to 100,000 topics per account."
  },
  {
    sectionId: 19,
    question: "What is the maximum SQS message size?",
    options: ["64 KB", "256 KB", "1 MB", "10 MB"],
    correctIndex: 1,
    explanation: "Amazon SQS has a maximum message size of 256 KB. For larger messages, you can use the SQS Extended Client Library which stores the message payload in S3."
  },
  {
    sectionId: 19,
    question: "Which Amazon ECS launch type requires you to provision and maintain EC2 instances?",
    options: ["Fargate", "EC2 Launch Type", "Lambda Launch Type", "Serverless Launch Type"],
    correctIndex: 1,
    explanation: "EC2 Launch Type requires you to provision and maintain EC2 instances in your cluster. Each instance must run the ECS Agent. Fargate is serverless—AWS manages the underlying infrastructure."
  },
  {
    sectionId: 19,
    question: "Amazon Managed Service for Prometheus retains metrics for how long by default?",
    options: ["30 days", "90 days", "150 days", "3 years"],
    correctIndex: 2,
    explanation: "Amazon Managed Service for Prometheus has a default retention period of 150 days, but metrics can be stored for up to 3 years. Data is replicated across 3 AZs for high availability."
  },

  // ==================== Additional SECTION 12 monitoring questions ====================
  {
    sectionId: 12,
    question: "Which CloudWatch feature uses ML algorithms to detect unusual activity and surface anomalies?",
    options: ["CloudWatch Insights", "CloudWatch Anomaly Detection", "CloudWatch Synthetics", "CloudWatch Container Insights"],
    correctIndex: 1,
    explanation: "CloudWatch Anomaly Detection (also called outlier detection) continuously analyzes metrics using ML algorithms to determine normal baselines, surface anomalies, and create alarms based on expected values."
  },
  {
    sectionId: 12,
    question: "What is the maximum number of EventBridge retry attempts for undeliverable events?",
    options: ["50", "100", "185", "500"],
    correctIndex: 2,
    explanation: "EventBridge has a default retry policy of 185 retry attempts over 24 hours. Undelivered events can be sent to a Dead Letter Queue (DLQ) using SQS."
  },
];

export default quizData;
