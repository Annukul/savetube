defmodule Savetube.Schema.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: ~w(id email name)a}
  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "users" do
    field :email, :string
    field :name, :string
    field :password, :string
    field :reset_token, :string, default: ""

    # Virtual fields:
    field :password_virtual, :string, virtual: true
    field :password_confirmation, :string, virtual: true

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [
      :name,
      :email,
      :password_virtual,
      :password_confirmation,
      :reset_token
    ])
    |> validate_required([:name, :email, :password_virtual, :password_confirmation])
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password_virtual, min: 8)
    |> validate_confirmation(:password_virtual)
    |> downcase_value(:email)
    |> unique_constraint(:email)
    |> put_password_hash()
  end

  def put_password_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password_virtual: pass}} ->
        put_change(changeset, :password, Comeonin.Bcrypt.hashpwsalt(pass))

      _ ->
        changeset
    end
  end

  def downcase_value(changeset, field) do
    case get_change(changeset, field) do
      nil ->
        changeset

      value ->
        put_change(changeset, field, String.downcase(value))
    end
  end
end
