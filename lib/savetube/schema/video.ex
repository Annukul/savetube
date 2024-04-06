defmodule Savetube.Schema.Video do
  use Ecto.Schema
  import Ecto.Changeset

  alias Savetube.Schema.User

  @derive {Jason.Encoder, only: ~w(id link name)a}
  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "videos" do
    field :name, :string
    field :link, :string

    belongs_to :user, User

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(video, attrs) do
    video
    |> cast(attrs, [
      :name,
      :link,
      :user_id
    ])
    |> validate_required([:name, :link, :user_id])
    |> unique_constraint(:link)
  end
end
