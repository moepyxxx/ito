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
    @summary("新しい鳥さんを登録する")
    @post
    register(
      @header
      contentType: "application/json",

      @body
      torisan: TorisanModel.Torisan,
    ): {
      @statusCode
      statuscode: 200;

      @body
      torisan: TorisanModel.Torisan;
    };
  }
}
