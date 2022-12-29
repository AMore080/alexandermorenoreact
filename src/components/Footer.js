import React from "react";
import { Grid } from "@nextui-org/react";
import githubLogo from '../icons/githubIcon.svg'
import linkedinLogo from '../icons/linkedinLogo.svg'
import twitterLogo from '../icons/twitterIcon.svg'
import emailIcon from '../icons/emailIcon.svg'

class Footer extends React.Component {
    render() {
        return (
            <footer class="bg-greenSea shadow md:px-6 md:py-8">
                <div class="flex justify-center">
                    <Grid.Container class="flex flex-wrap gap-5 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <Grid>
                            <a href="https://github.com/AMore080" class="mr-4 hover:underline md:mr-6 "><img alt="github logo" style={{ height: 63, width: 36 }} src={githubLogo}></img></a>
                        </Grid>
                        <Grid>
                            <a href="https://www.linkedin.com/in/alexander-moreno-9182a6193/" class="mr-4 hover:underline md:mr-6"><img alt="linkedIn logo" style={{ height: 63, width: 36 }} src={linkedinLogo}></img></a>
                        </Grid>
                        <Grid>
                            <a href="https://twitter.com/alexmore080" class="mr-4 hover:underline md:mr-6 "><img alt="twitter logo" style={{ height: 63, width: 36 }} src={twitterLogo}></img></a>
                        </Grid>
                        <Grid>
                            <a href="alexmore080@gmail.com" class="hover:underline"><img alt="envelope icon" style={{ height: 63, width: 36 }} src={emailIcon}></img></a>
                        </Grid>
                    </Grid.Container>
                </div>
            </footer>
        )
    }
}

export default Footer;