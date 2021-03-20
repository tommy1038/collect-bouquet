module Api
  class S3Controller < ApplicationController
    def index
      s3 = BouquetS3.new
      result = s3.posts
      render json: { status: 'SUCCESS', message: result }
    end
  end
end
