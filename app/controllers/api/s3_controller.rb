module Api
  class S3Controller < ApplicationController
    def index
      s3 = BouquetS3.new
      result = s3.posts(params[:size], params[:offset])
      render json: { posts: result }
    end
  end
end
