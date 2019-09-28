/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

@Path("person")
public class PersonResource {
    
    private static List<String> people = new ArrayList()
    {
        {
            add("{\"name\": \"Peter\"}");
        }
    };
    

    
    @Context
    private UriInfo context;

    public PersonResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String defaultMethod() {
        return people.get(0);
    }

}
