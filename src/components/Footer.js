import React from "react";
import { Grid } from "@nextui-org/react";

class Footer extends React.Component {
    render() {
        return (
            <footer class="bg-greenSea shadow md:px-6 md:py-8">
                <div class="flex justify-center">
                    <Grid.Container class="flex flex-wrap mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <Grid>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">GitHub</a>
                        </Grid>
                        <Grid>
                            <a href="#" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
                        </Grid>
                        <Grid>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Twitter</a>
                        </Grid>
                        <Grid>
                            <a href="#" class="hover:underline">Contact</a>
                        </Grid>
                    </Grid.Container>
                </div>
            </footer>
        )
    }
}

export default Footer;