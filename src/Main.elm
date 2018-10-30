module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)


type Msg
    = NextTurn
    | BossDefeated String
    | CityConquered String
    | GameVictory String


maxPlayers : Int
maxPlayers =
    4


initialSaloon : List Hero
initialSaloon =
    [ { name = "Cao Cao", attack = 8, movement = 2, questing = 1, cost = 5, upkeep = 4}
    , { name = "Alexander The Great", attack = 7, movement = 4, questing = 3, cost = 5, upkeep = 4}
    ]


initialModel : Model
initialModel =
    { players = []
    , cities = [ "Seattle", "El Dorado", "Constantinople", "Jerusalem", "Hyrule" ]
    , bosses = []
    , saloon = initialSaloon
    }


type alias Model =
    { players : List Player
    , cities : List City
    , bosses : List Boss
    , saloon : List Hero
    }


type alias Player =
    { playerName : String
    , goldCount : Int
    , heroList : List Hero
    , treasureInventory : List Treasure
    , empire : List City
    }


type alias Hero =
    { name : String
    , attack : Int
    , movement : Int
    , questingPower : Int
    , cost : Int
    , upkeep : Int
    }


type alias Treasure =
    String


type alias City =
    {name : String
    , goldProd : Int
    , defense : Int
    , turnsToConquer : Int
    }


type alias Boss =
    { name : String
    , questCost : Int
    , treasureHeld : Treasure
    }


view : Model -> Html Msg
view model =
    div [] []


update : Msg -> Model -> Model
update msg model =
    model



-- [hero1,....]  -> hero1 hired -> [...hero2,...]


main : Program () Model Msg
main =
    Browser.sandbox
        { init = initialModel
        , view = view
        , update = update
        }
