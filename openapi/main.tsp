import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "./src/torisan.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;

@service({
  title: "ito - OpenAPI 3.0",
  version: "1.0.0",
})
@server("http://localhost:8080", "")
namespace Ito;

@route("a")
namespace Auth {
  @tag("Torisan")
  @route("torisans")
  interface Torisan {
    @summary("鳥さんの一覧情報を見る")
    @get
    summary(): {
      @statusCode
      statuscode: 200;

      @body
      torisans: TorisanModel.SummaryTorisan[];
    };

    @summary("新しい鳥さんを登録する")
    @post
    register(
      @header
      contentType: "application/json",

      @body
      torisan: TorisanModel.RegisterTorisan,
    ): {
      @statusCode
      statuscode: 200;

      @body
      torisan: TorisanModel.DetailTorisan;
    };

    @summary("鳥さんの情報を更新する")
    @route("{id}")
    @put
    update(
      @header
      contentType: "application/json",

      @doc("鳥さんのID")
      @path
      id: string,

      @body
      torisan: TorisanModel.UpdateTorisan,
    ): {
      @statusCode
      statuscode: 200;

      @body
      torisan: TorisanModel.DetailTorisan;
    };

    @summary("鳥さんの情報詳細を見る")
    @route("{id}")
    @get
    detail(
      @doc("鳥さんのID")
      @path
      id: string,
    ): {
      @statusCode
      statuscode: 200;

      @body
      torisan: TorisanModel.DetailTorisan;
    };
  }
}
