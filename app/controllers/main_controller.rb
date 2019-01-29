class MainController < ApplicationController
  layout "main"

  def index
    sessions = Session.all
    @main_props = {available_sessions: sessions.available, booked_sessions: sessions.booked, full_sessions: sessions.full}
  end
end
