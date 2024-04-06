defmodule Savetube.Schema.Category do
  use Ecto.Schema
  import Ecto.Changeset

  alias Savetube.Schema.Video
  alias Savetube.Schema.User

  @derive {Jason.Encoder, only: ~w(id category)a}
  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "categories" do
    field :category, :string

    belongs_to :video, Video
    belongs_to :user, User

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(category, attrs) do
    category
    |> cast(attrs, [
      :category,
      :video_id,
      :user_id
    ])
    |> validate_required([:category, :video_id, :user_id])
    |> unique_constraint(:category)
  end
end
