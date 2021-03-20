require 'aws-sdk-s3'

class S3
  attr_accessor :client, :resource, :bucket_name

  def initialize
    credentials = Aws::Credentials.new(
      ENV['AWS_ACCESS_KEY_ID'],
      ENV['AWS_SECRET_ACCESS_KEY']
    )
    @client ||= Aws::S3::Client.new(
      region: 'ap-northeast-1',
      credentials: credentials
    )

    @resource ||= Aws::S3::Resource.new(
      region: 'ap-northeast-1',
      credentials: credentials
    )
    @bucket_name ||= 'collect-bouquet-bucket'
  end
end
