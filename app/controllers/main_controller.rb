class MainController < ApplicationController
  layout "main"

	def index
    @main_props = {sessions: Session.all}
  end
end
