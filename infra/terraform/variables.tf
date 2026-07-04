variable "aws_region" {
  description = "Regiao AWS"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Prefixo para nome e tags dos recursos"
  type        = string
  default     = "ultraportal"
}

variable "ami_id" {
  description = "AMI Ubuntu Server"
  type        = string
}

variable "instance_type" {
  description = "Tipo da instancia EC2"
  type        = string
  default     = "t3.micro"
}

variable "key_name" {
  description = "Nome da chave SSH cadastrada na AWS"
  type        = string
}

variable "allowed_ssh_cidr" {
  description = "IPs com acesso ao SSH, ex: 203.0.113.10/32 ou 0.0.0.0/0"
  type        = string
}