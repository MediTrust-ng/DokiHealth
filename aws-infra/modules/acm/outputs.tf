output "arn" {
    description = "ACM certificate ARN"
    value = data.aws_acm_certificate.this.arn
}