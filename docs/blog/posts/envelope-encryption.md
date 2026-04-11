---
date: 2025-08-31
title: 'How Chaterm uses envelope encryption to ensure data security'
author: Fish
category: Technical
tags:
  - Encryption
  - KMS
---

This article provides an introduction to the core principles and security advantages of Envelope Encryption. which achieves end-to-end data security through its architecture that separates the data encryption key from the master key, and is widely adopted by mainstream cloud services such as AWS and Google.

It also demonstrates how Chaterm uses this technology to build a security architecture, providing bank-level security protection for user's sensitive data such as SSH keys and configurations.

---
## Why Data Security is So Important

In modern IT operations and development, SSH keys, server passwords, and database connection information are extremely sensitive digital assets. If this information is leaked, it can lead to: intrusion into core enterprise systems; theft or extortion of important data; business service disruptions; and damage to brand reputation. Traditional endpoint management tools typically use simple password encryption or store data in plaintext in the cloud, both of which have serious security vulnerabilities. Even with encryption, improper key management can still lead to breaches.

**Therefore, we need more secure and reliable data protection technologies to address these challenges.**

## What is Envelope Encryption?

Envelope Encryption is an enterprise-grade encryption technology widely adopted by major cloud service providers such as AWS, Google Cloud, Microsoft Azure, and Alibaba Cloud. The name is quite descriptive: like putting an important letter in an envelope and then locking it in a safe, your data is doubly protected.

### Technical Background

Traditional encryption schemes face a dilemma:

- **Symmetric encryption** (e.g., AES): Fast encryption speed, suitable for large amounts of data, but key distribution is difficult.

- **Asymmetric encryption** (e.g., RSA): Secure key management, but slow encryption speed, unsuitable for large data volumes.

Envelope encryption cleverly combines the advantages of both while avoiding their respective disadvantages, becoming the standard encryption scheme for modern cloud services.

### Core Principles Explained

![Chaterm Logo](https://chaterm-static.intsig.net/download/sync_001.svg)

#### Three-Layer Key Protection System

The core of envelope encryption is multi-layered key isolation, like a Russian nesting doll, protecting each layer:

1. **Data Key (DEK)** - Directly encrypts your data, destroyed after one-time use.

2. **Key Encryption Key (KEK)** - Protects the data key, processed in the backend service.

3. **Master Key** - The root key, hosted in AWS KMS.

This layered design ensures that even if one layer is compromised, attackers cannot obtain your data. Each key has independent access control, achieving true defense in depth.

### Envelope Encryption Workflow

<img src="https://chaterm-static.intsig.net/download/sync_002.png" width="800" alt="Envelope Encryption Workflow Diagram">

**Key Security Points**:

- **Key Separation**: The Data Key (DEK) is separated from the master key. The DEK only exists briefly in memory when used.

- **Cloud Protection**: The master key is securely managed by a cloud service provider (such as AWS), providing enterprise-level security.

- **Zero-Knowledge Proof**: The cloud server can never obtain the ability to decrypt the data.

### In-Depth Security Analysis

#### Multiple Security Guarantees The security protection system is built on four core dimensions. At the **cryptographic security** level, we use the AES-256 encryption algorithm, which would take billions of years to crack even using all the computers in the world. This is combined with the GCM mode to provide dual protection for data confidentiality and integrity, and a cryptographically secure random number generator ensures the unpredictability of the key. Regarding **physical security**, the master key is fully hosted in the cloud service provider's security infrastructure, enjoying hardware-level protection certified by multiple international security standards, including professional protection against side-channel attacks. The **access control** mechanism ensures the authenticity of the requester's identity through multi-factor authentication, implements fine-grained permission management, and performs complete audit logging and real-time monitoring of all key operations. Finally, the **forward confidentiality** design ensures that even if the master key is compromised in the future, historical data remains secure. This is thanks to the use of independent data keys for each session and a regular key rotation mechanism to limit the impact of potential leaks.

### Technical Advantages Explained

#### Performance Advantages

| Comparison | Traditional Encryption | Envelope Encryption | Performance Improvement |
|-------|---------|---------|---------|
| Large File Encryption Speed ​​| RSA Direct Encryption: Slow | AES Encryption: Fast | **Over 100x** |
| Key Distribution | Requires a Secure Channel | Public Key System | **No Pre-sharing Required** |
| Batch Data Processing | Encrypt One by One | Parallel Processing | **10x Improvement** |
| Key Storage Cost | One Key Per Data | Key Reuse | **90% Reduction** |

#### Security Guarantee

During this process, your SSH private key is protected by multiple layers:

1. **Chaterm Cannot Read**: Our server can only see the ciphertext.

2. **Hackers Cannot Crack**: Decryption is impossible without the master key.

3. **Internal Personnel Cannot Access**: The master key is managed by the cloud service provider; Chatterm cannot access it.

4. **You Have Complete Control:** Only your device can request decryption.

### Comparison with Other Encryption Schemes

#### Encryption Scheme Comparison

| Comparison Dimensions | Traditional Symmetric Encryption | End-to-End Encryption (E2EE) | Envelope Encryption (Chaterm) |
|---------|-------------|-----------------|------------------|
| **Key Management** | Requires secure key transmission | Inter-device key exchange | Cloud-based KMS automatic management |
| **Key Storage** | Plaintext or simple encryption | Local storage | Hardware-level secure hosting |
| **Multi-Device Synchronization** | Manual key distribution | Complex implementation | Native support |
| **Key Recovery** | Relies on backups | Almost impossible | Secure recovery mechanism |
| **Enterprise Management** | Difficult centralized management | Difficult to audit | Complete audit trail |
| **Compliance** | Difficult to meet | Applicable to some scenarios | Complies with various standards |
| **Scalability** | Limited number of keys | Limited number of devices | Unlimited expansion |

## Chaterm How to Protect Your Data

### System Security Architecture

![Chaterm Logo](https://chaterm-static.intsig.net/download/sync_003.svg)

#### Core Security Features

- **Envelope Encryption**: Data keys encrypt data, and master keys encrypt data keys, providing double protection.

- **Zero Trust Architecture**: The server can never access plaintext data.

- **Two-Layer Key Architecture**: Chaterm KMS handles key distribution, and AWS KMS handles master key custody.

- **Key Isolation**: Key management and data storage are physically separated; the master key is hosted in AWS infrastructure.

### Technical Innovations

Chaterm enhances standard envelope encryption with several technological improvements. First, we integrate **zero-knowledge proof technology**, which verifies user identity without exposing password information, ensuring the server cannot access any plaintext data. Second, we employ a **distributed key generation mechanism**, generating keys through multi-party participation, effectively avoiding the impact of single-point failures on overall security. In terms of cutting-edge technology exploration, we are currently conducting preliminary research on **homomorphic encryption technology**, which will support direct computation operations in encrypted form in the future, further enhancing data privacy protection. Finally, for enterprise users, we offer a comprehensive **key escrow solution** that meets compliance requirements while providing a reliable disaster recovery mechanism.

### Security Measures

| Security Features | Description | Your Benefits |
|---------|----------|----------|
| **Envelope Encryption** | Employs industry-standard envelope encryption technology | Data remains secure even if the cloud is compromised |
| **Two-Layer Key Architecture** | Keys are distributed via Chatterm KMS, and the master key is managed by AWS KMS | Separation of responsibilities, the master key is fully managed by AWS |
| **Zero-Knowledge Architecture** | Chatterm servers cannot decrypt your data | Complete data privacy protection |
| **Key Rotation** | Encryption keys are automatically updated periodically | Limits the impact of a single key leak |

## Perfect Balance Between User Experience and Security

### Transparent Security Protection

When using Chatterm, all encryption operations are automatically completed in the background:

1. **Seamless Encryption** - The system automatically encrypts all sensitive data while you use the terminal functions normally.

2. **Fast Synchronization** - Encryption does not affect synchronization speed; millisecond-level response time.

3. **Offline Availability** - Local caching ensures normal operation even when offline.

4. **Multi-Device Support** - Securely access your configuration from any device.

## Applicable Scenarios

Chaterm's envelope encryption technology is particularly suitable for the following scenarios:

### Individual Developers

- Synchronize SSH configurations between home and office computers

- Protect access credentials for personal servers and cloud services

- Prevent key leaks due to lost laptops

### Operations Teams

- Securely share server access permissions among team members

- Centralized management but decentralized control of the key system

- Meet security audit and compliance requirements

## Frequently Asked Questions

**Q: If Chatem's server is attacked, is my data safe?**

A: Yes, it is safe. Due to envelope encryption, only encrypted data is stored on the server, and the decryption key is inaccessible. Even if the server is fully compromised, attackers cannot decrypt your data.

**Q: What if I forget my master password?**

A: For security reasons, we cannot help you recover your password. We recommend using a password manager to keep it safe, or recovering your password through email or a third-party login.

**Q: Will envelope encryption affect performance?** **
**A:** Almost no impact. Modern encryption algorithms are highly optimized, and encryption/decryption operations are completed in milliseconds.

**Q:** Can Challenger employees see my data?

**A:** No. Using a zero-knowledge architecture, all data is encrypted on your device; we can only see meaningless ciphertext.

## References
- Whitepaper: https://en.wikipedia.org/wiki/Envelope_encryption
- AWS: https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping
- Google Cloud: https://cloud.google.com/kms/docs/envelope-encryption
