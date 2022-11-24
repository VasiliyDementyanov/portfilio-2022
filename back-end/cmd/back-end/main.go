package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"golang.org/x/crypto/acme/autocert"
)

func customHTTPErrorHandler(err error, c echo.Context) {
	c.File("dist/404.html")
}

func main() {
	e := echo.New()
	e.AutoTLSManager.HostPolicy = autocert.HostWhitelist("dementyanov.ru")
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET},
	}))

	e.Static("/", "dist")
	e.Static("/education", "dist")
	e.Static("/work", "dist")
	e.Static("/contactme", "dist")

	e.AutoTLSManager.Cache = autocert.DirCache("/opt/portfolio-2022/.certificates")
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())

	e.HTTPErrorHandler = customHTTPErrorHandler

	e.Logger.Fatal(e.StartAutoTLS(":443"))
}

// dev
/*
func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))

	e.Static("/", "dist")
	e.Static("/education", "dist")
	e.Static("/work", "dist")
	e.Static("/contactme", "dist")

	e.HTTPErrorHandler = customHTTPErrorHandler

	err := e.Start("localhost:8080")
	if err != nil {
		panic(err)
	}
}
*/
