defmodule Savetube.Repo do
  use Ecto.Repo,
    otp_app: :savetube,
    adapter: Ecto.Adapters.Postgres
end
