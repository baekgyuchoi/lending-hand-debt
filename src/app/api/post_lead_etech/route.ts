


export async function POST(request: Request) {

    const data = await request.json()
    console.log(data)
    
    try {
        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            authid: process.env.RELX_AUTH_KEY,
            authsecret: process.env.RELX_AUTH_SECRET,
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            email: data.email,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            src_alias: 'channele',
            ref_id: ""
          })
        };
      
        const response = await fetch('https://connect.relintex.net/api/v2/lead', options);
        
        if (!response.ok) {
          // If the response status is not in the 200-299 range
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const result = await response.json();
        console.log(result);
      
        return new Response(JSON.stringify({ success: true, data: result }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
      } catch (error) {
        console.error('Error:', error);
        
        return new Response(
          JSON.stringify({
            success: false,
            error: error instanceof Error ? error.message : 'An unknown error occurred',
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }
}



