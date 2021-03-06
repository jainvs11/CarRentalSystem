



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-3363a32e5577881235034d97a56954a2bad2b63e4f49663753de33b9b3693258.css" integrity="sha256-M2OjLlV3iBI1A02XpWlUorrStj5PSWY3U94zubNpMlg=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-7c71a01ddd1ee83d35c198aaea9fb0eea65630d3975ab9970eca8d63463d2d3d.css" integrity="sha256-fHGgHd0e6D01wZiq6p+w7qZWMNOXWrmXDsqNY0Y9LT0=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-404cdd1add1f710db016a02e5e31fff8a9089d14ff0c227df862b780886db7d5.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-3f5d9e94c6a78a31e0a2e7d99731e864821a0cdbd82d28bc6948ef8cc4675f0b.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    
    <title>bootstrap-datepicker/bootstrap-datepicker.js at master · eternicode/bootstrap-datepicker</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/324189?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="eternicode/bootstrap-datepicker" name="twitter:title" /><meta content="bootstrap-datepicker - A datepicker for @twitter bootstrap forked from Stefan Petre&#39;s (of eyecon.ro), improvements by @eternicode" name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/324189?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="eternicode/bootstrap-datepicker" property="og:title" /><meta content="https://github.com/eternicode/bootstrap-datepicker" property="og:url" /><meta content="bootstrap-datepicker - A datepicker for @twitter bootstrap forked from Stefan Petre&#39;s (of eyecon.ro), improvements by @eternicode" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NDc0NzI0MDoyZGQwMmJiMDk0YzhhZDk2NDQ1ZGQyNTVmYmNkOWI4Njo1MGVjMzMxZGY5MmZmYWJiMzkzOGM1ZTRjNzUwZGE4MWUyNzc0ZWFiZWEzMTczODVlYmIwOGQ3ODIwNmYyYWE1--60372f02c5850f833a493a50f6580fc762ea25cc">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="CBC0F550:2E3A5:CB82E6:57971688" name="octolytics-dimension-request_id" /><meta content="4747240" name="octolytics-actor-id" /><meta content="jainvs11" name="octolytics-actor-login" /><meta content="50ef61a6fef58e7614b8247fc89d279fa0db2c0f58e14e465de305e8d79cb5eb" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="jainvs11">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="YjIzZTJmZWVmYWIxMzA2MGQyNjZhZjU0Mjg2NTkyMmNjNmEwZjZjYjBlMDQyM2RlMTViYzE2MmNhMTE3OGRkN3x7InJlbW90ZV9hZGRyZXNzIjoiMjAzLjE5Mi4yNDUuODAiLCJyZXF1ZXN0X2lkIjoiQ0JDMEY1NTA6MkUzQTU6Q0I4MkU2OjU3OTcxNjg4IiwidGltZXN0YW1wIjoxNDY5NTE5NDk2fQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="7c78fcadcbeff3aaa1cd04993fd7cbcbf135cad3">
    <meta content="63804ec8559d2bc3a607fd131195e6729bc65408" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="87f83d17e2e9fc93fee49bedca0de37e">
    

      
  <meta name="description" content="bootstrap-datepicker - A datepicker for @twitter bootstrap forked from Stefan Petre&#39;s (of eyecon.ro), improvements by @eternicode">
  <meta name="go-import" content="github.com/eternicode/bootstrap-datepicker git https://github.com/eternicode/bootstrap-datepicker.git">

  <meta content="324189" name="octolytics-dimension-user_id" /><meta content="eternicode" name="octolytics-dimension-user_login" /><meta content="3744545" name="octolytics-dimension-repository_id" /><meta content="eternicode/bootstrap-datepicker" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3744545" name="octolytics-dimension-repository_network_root_id" /><meta content="eternicode/bootstrap-datepicker" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/eternicode/bootstrap-datepicker/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-datepicker:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/eternicode/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eternicode/bootstrap-datepicker/search" class="js-site-search-form" data-scoped-search-url="/eternicode/bootstrap-datepicker/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:4747240" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="eternicode/bootstrap-datepicker">This repository</span>
  </div>
    <a class="dropdown-item" href="/eternicode/bootstrap-datepicker/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/jainvs11"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@jainvs11" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/4747240?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">jainvs11</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/jainvs11" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="63804ec8559d2bc3a607fd131195e6729bc65408" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="k3yLQlWYR9t1dE684WFULaHQhT8FAcdCsl7bG4aVzqfTb1NrcxVmReRc/g/4TKQS/qdlwtsJoQ4FSiXyd3nhGg==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="63804ec8559d2bc3a607fd131195e6729bc65408" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GErqAiaT6IZExtRiMtVoKg2vXd1vTI179n5YbF3iqunihVVhHrGqyl0iYidL8C4J50NUQbJD7c7u76+i/nB/UA==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="3744545" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/eternicode/bootstrap-datepicker/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/eternicode/bootstrap-datepicker/watchers">
            441
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eternicode/bootstrap-datepicker/unstar" class="starred" data-form-nonce="63804ec8559d2bc3a607fd131195e6729bc65408" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BpunhS7aihdWvm+29DI1K6BrVKS59bnILsSAc9HEKovzR98CXOv6M+ERfmQjK73FZ/GX5Hab/wFANaMpngVKpg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar eternicode/bootstrap-datepicker"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/eternicode/bootstrap-datepicker/stargazers">
          8,465
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eternicode/bootstrap-datepicker/star" class="unstarred" data-form-nonce="63804ec8559d2bc3a607fd131195e6729bc65408" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kxidC18ZPcX8OtQIoEXVJRg0Jg4VtcGjS55NKg3RwG0trjfxjyCYphW/w7rBXN7SiD/bObxzigkslt0fPW0q/w==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star eternicode/bootstrap-datepicker"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/eternicode/bootstrap-datepicker/stargazers">
          8,465
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eternicode/bootstrap-datepicker/fork" class="btn-with-count" data-form-nonce="63804ec8559d2bc3a607fd131195e6729bc65408" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NL7Teo6bdsIMoo/xnEre80N8kiCpFl6VBv4J4IlUlKD4XW2a8LY+nDx9SPou3RNg9srTeK3zlQTUa0crX69yyQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of eternicode/bootstrap-datepicker to your account"
                aria-label="Fork your own copy of eternicode/bootstrap-datepicker to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/eternicode/bootstrap-datepicker/network" class="social-count">
      3,493
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/eternicode" class="url fn" rel="author">eternicode</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/eternicode/bootstrap-datepicker" data-pjax="#js-repo-pjax-container">bootstrap-datepicker</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/eternicode/bootstrap-datepicker" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /eternicode/bootstrap-datepicker" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/eternicode/bootstrap-datepicker/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /eternicode/bootstrap-datepicker/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">446</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/eternicode/bootstrap-datepicker/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /eternicode/bootstrap-datepicker/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">62</span>
      <meta itemprop="position" content="3">
</a>  </span>



  <a href="/eternicode/bootstrap-datepicker/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /eternicode/bootstrap-datepicker/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/eternicode/bootstrap-datepicker/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /eternicode/bootstrap-datepicker/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/eternicode/bootstrap-datepicker/blob/3bde2d87a291fcc1808a86dc9317eba9d361b7a0/js/bootstrap-datepicker.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d818ce7a82f3628856c6687df92701a1 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eternicode/bootstrap-datepicker/blob/1.5/js/bootstrap-datepicker.js"
               data-name="1.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="1.5">
                1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eternicode/bootstrap-datepicker/blob/1.6/js/bootstrap-datepicker.js"
               data-name="1.6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="1.6">
                1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eternicode/bootstrap-datepicker/blob/extensible/js/bootstrap-datepicker.js"
               data-name="extensible"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="extensible">
                extensible
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eternicode/bootstrap-datepicker/blob/gh-pages/js/bootstrap-datepicker.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/eternicode/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.6.1/js/bootstrap-datepicker.js"
              data-name="v1.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.1">
                v1.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.6.0/js/bootstrap-datepicker.js"
              data-name="v1.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.0">
                v1.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.6.0-alpha/js/bootstrap-datepicker.js"
              data-name="v1.6.0-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.0-alpha">
                v1.6.0-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.5.1/js/bootstrap-datepicker.js"
              data-name="v1.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.1">
                v1.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.5.0/js/bootstrap-datepicker.js"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.5.0-RC1/js/bootstrap-datepicker.js"
              data-name="v1.5.0-RC1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-RC1">
                v1.5.0-RC1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.4.1/js/bootstrap-datepicker.js"
              data-name="v1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.1">
                v1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.4.0/js/bootstrap-datepicker.js"
              data-name="v1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0">
                v1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.0.1/js/bootstrap-datepicker.js"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/v1.0.0/js/bootstrap-datepicker.js"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.3.1/js/bootstrap-datepicker.js"
              data-name="1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.1">
                1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.3.0/js/bootstrap-datepicker.js"
              data-name="1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0">
                1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.3.0-rc.6/js/bootstrap-datepicker.js"
              data-name="1.3.0-rc.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0-rc.6">
                1.3.0-rc.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.3.0-rc.5/js/bootstrap-datepicker.js"
              data-name="1.3.0-rc.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0-rc.5">
                1.3.0-rc.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.3.0-rc.4/js/bootstrap-datepicker.js"
              data-name="1.3.0-rc.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0-rc.4">
                1.3.0-rc.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.3.0-rc.3/js/bootstrap-datepicker.js"
              data-name="1.3.0-rc.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0-rc.3">
                1.3.0-rc.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.3.0-rc.2/js/bootstrap-datepicker.js"
              data-name="1.3.0-rc.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0-rc.2">
                1.3.0-rc.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.3.0-rc.1/js/bootstrap-datepicker.js"
              data-name="1.3.0-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0-rc.1">
                1.3.0-rc.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.2.0/js/bootstrap-datepicker.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.2.0-rc.1/js/bootstrap-datepicker.js"
              data-name="1.2.0-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0-rc.1">
                1.2.0-rc.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.1.3/js/bootstrap-datepicker.js"
              data-name="1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.3">
                1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.1.2/js/bootstrap-datepicker.js"
              data-name="1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.2">
                1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.1.1/js/bootstrap-datepicker.js"
              data-name="1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.1">
                1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.1.0/js/bootstrap-datepicker.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.0.2/js/bootstrap-datepicker.js"
              data-name="1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.2">
                1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.0.2-rc.2/js/bootstrap-datepicker.js"
              data-name="1.0.2-rc.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.2-rc.2">
                1.0.2-rc.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.0.2-rc.1.1/js/bootstrap-datepicker.js"
              data-name="1.0.2-rc.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.2-rc.1.1">
                1.0.2-rc.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/eternicode/bootstrap-datepicker/tree/1.0.2-rc.1/js/bootstrap-datepicker.js"
              data-name="1.0.2-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.2-rc.1">
                1.0.2-rc.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/eternicode/bootstrap-datepicker/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/eternicode/bootstrap-datepicker"><span>bootstrap-datepicker</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/eternicode/bootstrap-datepicker/tree/master/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">bootstrap-datepicker.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/eternicode/bootstrap-datepicker/commit/0f7ddc29cdcb0423c5bbbc1a602a632573327f1d" data-pjax>
          0f7ddc2
        </a>
        <relative-time datetime="2016-07-14T21:11:13Z">Jul 14, 2016</relative-time>
      </span>
      <div>
        <img alt="@maxfurman" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/6634694?v=3&amp;s=40" width="20" />
        <a href="/maxfurman" class="user-mention" rel="contributor">maxfurman</a>
          <a href="/eternicode/bootstrap-datepicker/commit/0f7ddc29cdcb0423c5bbbc1a602a632573327f1d" class="message" data-pjax="true" title="Split o.datesDisabled instead of wrapping">Split o.datesDisabled instead of wrapping</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>138</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="eternicode" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=eternicode"><img alt="@eternicode" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/324189?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="acrobat" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=acrobat"><img alt="@acrobat" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1374857?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vitalets" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=vitalets"><img alt="@vitalets" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1473072?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vsn4ik" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=vsn4ik"><img alt="@vsn4ik" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3757319?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Azaret" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=Azaret"><img alt="@Azaret" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1201743?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hebbet" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=hebbet"><img alt="@hebbet" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1423115?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tcrosen" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=tcrosen"><img alt="@tcrosen" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1195132?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="osama9" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=osama9"><img alt="@osama9" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3780410?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="abibell" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=abibell"><img alt="@abibell" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/544653?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="fadomire" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=fadomire"><img alt="@fadomire" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1186197?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="divpreet" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=divpreet"><img alt="@divpreet" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2805650?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="fabdouglas" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=fabdouglas"><img alt="@fabdouglas" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/579170?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dionysiosarvanitis" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=dionysiosarvanitis"><img alt="@dionysiosarvanitis" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1359269?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="darylldoyle" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=darylldoyle"><img alt="@darylldoyle" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/968731?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="fluffels" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=fluffels"><img alt="@fluffels" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2345151?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="matiasalvarez87" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=matiasalvarez87"><img alt="@matiasalvarez87" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/876864?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="thetimbanks" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=thetimbanks"><img alt="@thetimbanks" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/471801?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ajb" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=ajb"><img alt="@ajb" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1270317?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="andrezsanchez" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=andrezsanchez"><img alt="@andrezsanchez" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3478034?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="boboldehampsink" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=boboldehampsink"><img alt="@boboldehampsink" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/378974?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="bertBruynooghe" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=bertBruynooghe"><img alt="@bertBruynooghe" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/500119?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="caarlos0" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=caarlos0"><img alt="@caarlos0" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/245435?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lakenen" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=lakenen"><img alt="@lakenen" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/103672?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="CauanCabral" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=CauanCabral"><img alt="@CauanCabral" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/83092?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="cdeszaq" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=cdeszaq"><img alt="@cdeszaq" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/612084?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="daniel-franz" href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=daniel-franz"><img alt="@daniel-franz" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1202129?v=3&amp;s=40" width="20" /> </a>

    <button type="button" data-facebox="#blob_contributors_box" class="btn-link others-text">and others</button>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@eternicode" height="24" src="https://avatars0.githubusercontent.com/u/324189?v=3&amp;s=48" width="24" />
            <a href="/eternicode">eternicode</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@acrobat" height="24" src="https://avatars2.githubusercontent.com/u/1374857?v=3&amp;s=48" width="24" />
            <a href="/acrobat">acrobat</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vitalets" height="24" src="https://avatars3.githubusercontent.com/u/1473072?v=3&amp;s=48" width="24" />
            <a href="/vitalets">vitalets</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vsn4ik" height="24" src="https://avatars2.githubusercontent.com/u/3757319?v=3&amp;s=48" width="24" />
            <a href="/vsn4ik">vsn4ik</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Azaret" height="24" src="https://avatars2.githubusercontent.com/u/1201743?v=3&amp;s=48" width="24" />
            <a href="/Azaret">Azaret</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hebbet" height="24" src="https://avatars3.githubusercontent.com/u/1423115?v=3&amp;s=48" width="24" />
            <a href="/hebbet">hebbet</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tcrosen" height="24" src="https://avatars0.githubusercontent.com/u/1195132?v=3&amp;s=48" width="24" />
            <a href="/tcrosen">tcrosen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@osama9" height="24" src="https://avatars0.githubusercontent.com/u/3780410?v=3&amp;s=48" width="24" />
            <a href="/osama9">osama9</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@abibell" height="24" src="https://avatars1.githubusercontent.com/u/544653?v=3&amp;s=48" width="24" />
            <a href="/abibell">abibell</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@fadomire" height="24" src="https://avatars0.githubusercontent.com/u/1186197?v=3&amp;s=48" width="24" />
            <a href="/fadomire">fadomire</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@divpreet" height="24" src="https://avatars0.githubusercontent.com/u/2805650?v=3&amp;s=48" width="24" />
            <a href="/divpreet">divpreet</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@fabdouglas" height="24" src="https://avatars1.githubusercontent.com/u/579170?v=3&amp;s=48" width="24" />
            <a href="/fabdouglas">fabdouglas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dionysiosarvanitis" height="24" src="https://avatars2.githubusercontent.com/u/1359269?v=3&amp;s=48" width="24" />
            <a href="/dionysiosarvanitis">dionysiosarvanitis</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@darylldoyle" height="24" src="https://avatars2.githubusercontent.com/u/968731?v=3&amp;s=48" width="24" />
            <a href="/darylldoyle">darylldoyle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@fluffels" height="24" src="https://avatars0.githubusercontent.com/u/2345151?v=3&amp;s=48" width="24" />
            <a href="/fluffels">fluffels</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@matiasalvarez87" height="24" src="https://avatars3.githubusercontent.com/u/876864?v=3&amp;s=48" width="24" />
            <a href="/matiasalvarez87">matiasalvarez87</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@thetimbanks" height="24" src="https://avatars0.githubusercontent.com/u/471801?v=3&amp;s=48" width="24" />
            <a href="/thetimbanks">thetimbanks</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ajb" height="24" src="https://avatars0.githubusercontent.com/u/1270317?v=3&amp;s=48" width="24" />
            <a href="/ajb">ajb</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@andrezsanchez" height="24" src="https://avatars2.githubusercontent.com/u/3478034?v=3&amp;s=48" width="24" />
            <a href="/andrezsanchez">andrezsanchez</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@boboldehampsink" height="24" src="https://avatars2.githubusercontent.com/u/378974?v=3&amp;s=48" width="24" />
            <a href="/boboldehampsink">boboldehampsink</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bertBruynooghe" height="24" src="https://avatars0.githubusercontent.com/u/500119?v=3&amp;s=48" width="24" />
            <a href="/bertBruynooghe">bertBruynooghe</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@caarlos0" height="24" src="https://avatars1.githubusercontent.com/u/245435?v=3&amp;s=48" width="24" />
            <a href="/caarlos0">caarlos0</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lakenen" height="24" src="https://avatars2.githubusercontent.com/u/103672?v=3&amp;s=48" width="24" />
            <a href="/lakenen">lakenen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@CauanCabral" height="24" src="https://avatars0.githubusercontent.com/u/83092?v=3&amp;s=48" width="24" />
            <a href="/CauanCabral">CauanCabral</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@cdeszaq" height="24" src="https://avatars2.githubusercontent.com/u/612084?v=3&amp;s=48" width="24" />
            <a href="/cdeszaq">cdeszaq</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@daniel-franz" height="24" src="https://avatars2.githubusercontent.com/u/1202129?v=3&amp;s=48" width="24" />
            <a href="/daniel-franz">daniel-franz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@steffendietz" height="24" src="https://avatars2.githubusercontent.com/u/11530?v=3&amp;s=48" width="24" />
            <a href="/steffendietz">steffendietz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@warrenseymour" height="24" src="https://avatars0.githubusercontent.com/u/663716?v=3&amp;s=48" width="24" />
            <a href="/warrenseymour">warrenseymour</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@edgardmessias" height="24" src="https://avatars1.githubusercontent.com/u/1530997?v=3&amp;s=48" width="24" />
            <a href="/edgardmessias">edgardmessias</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@willrjmarshall" height="24" src="https://avatars1.githubusercontent.com/u/97204?v=3&amp;s=48" width="24" />
            <a href="/willrjmarshall">willrjmarshall</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@WedgeSama" height="24" src="https://avatars2.githubusercontent.com/u/1552205?v=3&amp;s=48" width="24" />
            <a href="/WedgeSama">WedgeSama</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@korun" height="24" src="https://avatars3.githubusercontent.com/u/5562931?v=3&amp;s=48" width="24" />
            <a href="/korun">korun</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jaranflaath" height="24" src="https://avatars1.githubusercontent.com/u/112975?v=3&amp;s=48" width="24" />
            <a href="/jaranflaath">jaranflaath</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@laltin" height="24" src="https://avatars3.githubusercontent.com/u/2430857?v=3&amp;s=48" width="24" />
            <a href="/laltin">laltin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ansman" height="24" src="https://avatars1.githubusercontent.com/u/102883?v=3&amp;s=48" width="24" />
            <a href="/ansman">ansman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vanack" height="24" src="https://avatars3.githubusercontent.com/u/1371466?v=3&amp;s=48" width="24" />
            <a href="/vanack">vanack</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tommysanterre" height="24" src="https://avatars0.githubusercontent.com/u/2781089?v=3&amp;s=48" width="24" />
            <a href="/tommysanterre">tommysanterre</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@raphaelstolt" height="24" src="https://avatars0.githubusercontent.com/u/48225?v=3&amp;s=48" width="24" />
            <a href="/raphaelstolt">raphaelstolt</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pjlammertyn" height="24" src="https://avatars2.githubusercontent.com/u/1187178?v=3&amp;s=48" width="24" />
            <a href="/pjlammertyn">pjlammertyn</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dentarg" height="24" src="https://avatars2.githubusercontent.com/u/42626?v=3&amp;s=48" width="24" />
            <a href="/dentarg">dentarg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tomalec" height="24" src="https://avatars0.githubusercontent.com/u/17435?v=3&amp;s=48" width="24" />
            <a href="/tomalec">tomalec</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@renhammington" height="24" src="https://avatars3.githubusercontent.com/u/4220483?v=3&amp;s=48" width="24" />
            <a href="/renhammington">renhammington</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Bloafer" height="24" src="https://avatars1.githubusercontent.com/u/317470?v=3&amp;s=48" width="24" />
            <a href="/Bloafer">Bloafer</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mologie" height="24" src="https://avatars1.githubusercontent.com/u/597682?v=3&amp;s=48" width="24" />
            <a href="/mologie">mologie</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vvo" height="24" src="https://avatars3.githubusercontent.com/u/123822?v=3&amp;s=48" width="24" />
            <a href="/vvo">vvo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Nicop06" height="24" src="https://avatars1.githubusercontent.com/u/4980558?v=3&amp;s=48" width="24" />
            <a href="/Nicop06">Nicop06</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@nicomollet" height="24" src="https://avatars0.githubusercontent.com/u/108828?v=3&amp;s=48" width="24" />
            <a href="/nicomollet">nicomollet</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@invisibleroads" height="24" src="https://avatars3.githubusercontent.com/u/266668?v=3&amp;s=48" width="24" />
            <a href="/invisibleroads">invisibleroads</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@npinchot" height="24" src="https://avatars3.githubusercontent.com/u/174529?v=3&amp;s=48" width="24" />
            <a href="/npinchot">npinchot</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Munter" height="24" src="https://avatars3.githubusercontent.com/u/331790?v=3&amp;s=48" width="24" />
            <a href="/Munter">Munter</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@milotoor" height="24" src="https://avatars2.githubusercontent.com/u/4667801?v=3&amp;s=48" width="24" />
            <a href="/milotoor">milotoor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mshafrir" height="24" src="https://avatars3.githubusercontent.com/u/17740?v=3&amp;s=48" width="24" />
            <a href="/mshafrir">mshafrir</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@michaelbrooks" height="24" src="https://avatars1.githubusercontent.com/u/1330400?v=3&amp;s=48" width="24" />
            <a href="/michaelbrooks">michaelbrooks</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rap1ds" height="24" src="https://avatars2.githubusercontent.com/u/429876?v=3&amp;s=48" width="24" />
            <a href="/rap1ds">rap1ds</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mreinsch" height="24" src="https://avatars0.githubusercontent.com/u/33982?v=3&amp;s=48" width="24" />
            <a href="/mreinsch">mreinsch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@realityking" height="24" src="https://avatars0.githubusercontent.com/u/628508?v=3&amp;s=48" width="24" />
            <a href="/realityking">realityking</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@maxfurman" height="24" src="https://avatars1.githubusercontent.com/u/6634694?v=3&amp;s=48" width="24" />
            <a href="/maxfurman">maxfurman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@MRigal" height="24" src="https://avatars2.githubusercontent.com/u/2190327?v=3&amp;s=48" width="24" />
            <a href="/MRigal">MRigal</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jonssonth" height="24" src="https://avatars2.githubusercontent.com/u/15977447?v=3&amp;s=48" width="24" />
            <a href="/jonssonth">jonssonth</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mfunkie" height="24" src="https://avatars0.githubusercontent.com/u/1137065?v=3&amp;s=48" width="24" />
            <a href="/mfunkie">mfunkie</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@macodev" height="24" src="https://avatars0.githubusercontent.com/u/943964?v=3&amp;s=48" width="24" />
            <a href="/macodev">macodev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jpdevries" height="24" src="https://avatars3.githubusercontent.com/u/592335?v=3&amp;s=48" width="24" />
            <a href="/jpdevries">jpdevries</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@PEKTOP" height="24" src="https://avatars2.githubusercontent.com/u/1898063?v=3&amp;s=48" width="24" />
            <a href="/PEKTOP">PEKTOP</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mediavrog" height="24" src="https://avatars2.githubusercontent.com/u/160785?v=3&amp;s=48" width="24" />
            <a href="/mediavrog">mediavrog</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rhoggSugarcrm" height="24" src="https://avatars2.githubusercontent.com/u/10406503?v=3&amp;s=48" width="24" />
            <a href="/rhoggSugarcrm">rhoggSugarcrm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kix" height="24" src="https://avatars0.githubusercontent.com/u/345754?v=3&amp;s=48" width="24" />
            <a href="/kix">kix</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jojosati" height="24" src="https://avatars2.githubusercontent.com/u/822889?v=3&amp;s=48" width="24" />
            <a href="/jojosati">jojosati</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@johnnyreilly" height="24" src="https://avatars3.githubusercontent.com/u/1010525?v=3&amp;s=48" width="24" />
            <a href="/johnnyreilly">johnnyreilly</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vulgarcoder" height="24" src="https://avatars1.githubusercontent.com/u/1209666?v=3&amp;s=48" width="24" />
            <a href="/vulgarcoder">vulgarcoder</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@javarr" height="24" src="https://avatars0.githubusercontent.com/u/2529037?v=3&amp;s=48" width="24" />
            <a href="/javarr">javarr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@RichardFrontwise" height="24" src="https://avatars3.githubusercontent.com/u/1917924?v=3&amp;s=48" width="24" />
            <a href="/RichardFrontwise">RichardFrontwise</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@coopernurse" height="24" src="https://avatars3.githubusercontent.com/u/244690?v=3&amp;s=48" width="24" />
            <a href="/coopernurse">coopernurse</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rjfranco" height="24" src="https://avatars3.githubusercontent.com/u/272624?v=3&amp;s=48" width="24" />
            <a href="/rjfranco">rjfranco</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hyderali" height="24" src="https://avatars1.githubusercontent.com/u/2162393?v=3&amp;s=48" width="24" />
            <a href="/hyderali">hyderali</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hinrik" height="24" src="https://avatars3.githubusercontent.com/u/43533?v=3&amp;s=48" width="24" />
            <a href="/hinrik">hinrik</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gr2m" height="24" src="https://avatars2.githubusercontent.com/u/39992?v=3&amp;s=48" width="24" />
            <a href="/gr2m">gr2m</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@timrwood" height="24" src="https://avatars2.githubusercontent.com/u/643885?v=3&amp;s=48" width="24" />
            <a href="/timrwood">timrwood</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@chancancode" height="24" src="https://avatars3.githubusercontent.com/u/55829?v=3&amp;s=48" width="24" />
            <a href="/chancancode">chancancode</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Witchfinder" height="24" src="https://avatars3.githubusercontent.com/u/6727201?v=3&amp;s=48" width="24" />
            <a href="/Witchfinder">Witchfinder</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@CalamityJames" height="24" src="https://avatars1.githubusercontent.com/u/5637797?v=3&amp;s=48" width="24" />
            <a href="/CalamityJames">CalamityJames</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gabriel" height="24" src="https://avatars3.githubusercontent.com/u/2669?v=3&amp;s=48" width="24" />
            <a href="/gabriel">gabriel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gbedardsice" height="24" src="https://avatars0.githubusercontent.com/u/680623?v=3&amp;s=48" width="24" />
            <a href="/gbedardsice">gbedardsice</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gboer" height="24" src="https://avatars1.githubusercontent.com/u/1188125?v=3&amp;s=48" width="24" />
            <a href="/gboer">gboer</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@r0ro" height="24" src="https://avatars2.githubusercontent.com/u/465562?v=3&amp;s=48" width="24" />
            <a href="/r0ro">r0ro</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@wpasternak" height="24" src="https://avatars2.githubusercontent.com/u/958449?v=3&amp;s=48" width="24" />
            <a href="/wpasternak">wpasternak</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zaynetro" height="24" src="https://avatars2.githubusercontent.com/u/627197?v=3&amp;s=48" width="24" />
            <a href="/zaynetro">zaynetro</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@alexserdyuk" height="24" src="https://avatars1.githubusercontent.com/u/310995?v=3&amp;s=48" width="24" />
            <a href="/alexserdyuk">alexserdyuk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dule" height="24" src="https://avatars1.githubusercontent.com/u/369008?v=3&amp;s=48" width="24" />
            <a href="/dule">dule</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@samzurcher" height="24" src="https://avatars0.githubusercontent.com/u/2626?v=3&amp;s=48" width="24" />
            <a href="/samzurcher">samzurcher</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@WojtekKruszewski" height="24" src="https://avatars3.githubusercontent.com/u/54917?v=3&amp;s=48" width="24" />
            <a href="/WojtekKruszewski">WojtekKruszewski</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@derylseale" height="24" src="https://avatars0.githubusercontent.com/u/1426718?v=3&amp;s=48" width="24" />
            <a href="/derylseale">derylseale</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@denis-sokolov" height="24" src="https://avatars2.githubusercontent.com/u/113721?v=3&amp;s=48" width="24" />
            <a href="/denis-sokolov">denis-sokolov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dbackowski" height="24" src="https://avatars3.githubusercontent.com/u/567457?v=3&amp;s=48" width="24" />
            <a href="/dbackowski">dbackowski</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@angelyordanov" height="24" src="https://avatars2.githubusercontent.com/u/1524014?v=3&amp;s=48" width="24" />
            <a href="/angelyordanov">angelyordanov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@danielhusar" height="24" src="https://avatars1.githubusercontent.com/u/1857751?v=3&amp;s=48" width="24" />
            <a href="/danielhusar">danielhusar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@SlimerDude" height="24" src="https://avatars1.githubusercontent.com/u/3326741?v=3&amp;s=48" width="24" />
            <a href="/SlimerDude">SlimerDude</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@colavitam" height="24" src="https://avatars2.githubusercontent.com/u/4278041?v=3&amp;s=48" width="24" />
            <a href="/colavitam">colavitam</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@clemens" height="24" src="https://avatars0.githubusercontent.com/u/3749?v=3&amp;s=48" width="24" />
            <a href="/clemens">clemens</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@1st8" height="24" src="https://avatars0.githubusercontent.com/u/646693?v=3&amp;s=48" width="24" />
            <a href="/1st8">1st8</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hemp" height="24" src="https://avatars0.githubusercontent.com/u/25412?v=3&amp;s=48" width="24" />
            <a href="/hemp">hemp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@throup" height="24" src="https://avatars0.githubusercontent.com/u/1216362?v=3&amp;s=48" width="24" />
            <a href="/throup">throup</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@chandon" height="24" src="https://avatars0.githubusercontent.com/u/4522557?v=3&amp;s=48" width="24" />
            <a href="/chandon">chandon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@laserlemon" height="24" src="https://avatars3.githubusercontent.com/u/34264?v=3&amp;s=48" width="24" />
            <a href="/laserlemon">laserlemon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@inukshuk" height="24" src="https://avatars3.githubusercontent.com/u/325102?v=3&amp;s=48" width="24" />
            <a href="/inukshuk">inukshuk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@t3chn0r" height="24" src="https://avatars3.githubusercontent.com/u/2670603?v=3&amp;s=48" width="24" />
            <a href="/t3chn0r">t3chn0r</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tcrossland" height="24" src="https://avatars3.githubusercontent.com/u/759011?v=3&amp;s=48" width="24" />
            <a href="/tcrossland">tcrossland</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@teoulas" height="24" src="https://avatars3.githubusercontent.com/u/53618?v=3&amp;s=48" width="24" />
            <a href="/teoulas">teoulas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tgirardi" height="24" src="https://avatars0.githubusercontent.com/u/2540464?v=3&amp;s=48" width="24" />
            <a href="/tgirardi">tgirardi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bskyb-monitoring-github" height="24" src="https://avatars2.githubusercontent.com/u/7430235?v=3&amp;s=48" width="24" />
            <a href="/bskyb-monitoring-github">bskyb-monitoring-github</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tpeter1985" height="24" src="https://avatars2.githubusercontent.com/u/16336536?v=3&amp;s=48" width="24" />
            <a href="/tpeter1985">tpeter1985</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zgohr" height="24" src="https://avatars1.githubusercontent.com/u/558739?v=3&amp;s=48" width="24" />
            <a href="/zgohr">zgohr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@alsofronie" height="24" src="https://avatars1.githubusercontent.com/u/6920256?v=3&amp;s=48" width="24" />
            <a href="/alsofronie">alsofronie</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@alexquast" height="24" src="https://avatars3.githubusercontent.com/u/1843607?v=3&amp;s=48" width="24" />
            <a href="/alexquast">alexquast</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@afortaleza" height="24" src="https://avatars1.githubusercontent.com/u/407682?v=3&amp;s=48" width="24" />
            <a href="/afortaleza">afortaleza</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@addbrick" height="24" src="https://avatars3.githubusercontent.com/u/800916?v=3&amp;s=48" width="24" />
            <a href="/addbrick">addbrick</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@wishmaster80" height="24" src="https://avatars0.githubusercontent.com/u/9378901?v=3&amp;s=48" width="24" />
            <a href="/wishmaster80">wishmaster80</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@nicolasmccurdy" height="24" src="https://avatars2.githubusercontent.com/u/927220?v=3&amp;s=48" width="24" />
            <a href="/nicolasmccurdy">nicolasmccurdy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zakjan" height="24" src="https://avatars1.githubusercontent.com/u/173585?v=3&amp;s=48" width="24" />
            <a href="/zakjan">zakjan</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/eternicode/bootstrap-datepicker/raw/master/js/bootstrap-datepicker.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/eternicode/bootstrap-datepicker/blame/master/js/bootstrap-datepicker.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/eternicode/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/eternicode/bootstrap-datepicker?branch=master&amp;filepath=js%2Fbootstrap-datepicker.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eternicode/bootstrap-datepicker/edit/master/js/bootstrap-datepicker.js" class="inline-form js-update-url-with-hash" data-form-nonce="63804ec8559d2bc3a607fd131195e6729bc65408" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YjW9EhpFfWOAz3Mkf5rvyT+qWU0ZYEyQHnyJGmXVAU/UePXtnRctX8PNKjr7uT3oFLEHwf1HjaBLwAMrwMWtlA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eternicode/bootstrap-datepicker/delete/master/js/bootstrap-datepicker.js" class="inline-form" data-form-nonce="63804ec8559d2bc3a607fd131195e6729bc65408" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oqkafy54qA8lou61XocY0pS+K/qZ5uoPQbjU1El/OBfXjRbEgVpHsk3qbJTf1X+wevAcpdR54pIN+rNywXVpFA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      2025 lines (1847 sloc)
      <span class="file-info-divider"></span>
    55.7 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/* =========================================================</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bootstrap-datepicker.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Repo: https://github.com/eternicode/bootstrap-datepicker/</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Demo: https://eternicode.github.io/bootstrap-datepicker/</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Docs: https://bootstrap-datepicker.readthedocs.org/</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Forked from http://www.eyecon.ro/bootstrap-datepicker</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * =========================================================</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Started by Stefan Petre; improvements by Andrew Rowls + contributors</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ========================================================= */</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">factory</span>){</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span>) {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">define</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>jquery<span class="pl-pds">&quot;</span></span>], factory);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">factory</span>(<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">factory</span>(jQuery);</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">}(<span class="pl-k">function</span>(<span class="pl-smi">$</span>, <span class="pl-c1">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">UTCDate</span>(){</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">Date</span>.<span class="pl-c1">UTC</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">Date</span>, <span class="pl-v">arguments</span>));</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">UTCToday</span>(){</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> today <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-en">UTCDate</span>(<span class="pl-smi">today</span>.<span class="pl-c1">getFullYear</span>(), <span class="pl-smi">today</span>.<span class="pl-c1">getMonth</span>(), <span class="pl-smi">today</span>.<span class="pl-c1">getDate</span>());</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isUTCEquals</span>(<span class="pl-smi">date1</span>, <span class="pl-smi">date2</span>) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">date1</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">===</span> <span class="pl-smi">date2</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">date1</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">===</span> <span class="pl-smi">date2</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">date1</span>.<span class="pl-c1">getUTCDate</span>() <span class="pl-k">===</span> <span class="pl-smi">date2</span>.<span class="pl-c1">getUTCDate</span>()</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">		);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">alias</span>(<span class="pl-smi">method</span>){</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>[method].<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, <span class="pl-v">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isValidDate</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(<span class="pl-smi">d</span>.<span class="pl-c1">getTime</span>());</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> DateArray <span class="pl-k">=</span> (<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> extras <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">slice</span>(i)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">contains</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Array.indexOf is not cross-browser;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// $.inArray doesn&#39;t work with Dates</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> val <span class="pl-k">=</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">d</span>.<span class="pl-c1">valueOf</span>();</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, l<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> l; i<span class="pl-k">++</span>)</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// Use date arithmetic to allow dates with different times to match</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-c1">0</span> <span class="pl-k">&lt;=</span> <span class="pl-v">this</span>[i].<span class="pl-c1">valueOf</span>() <span class="pl-k">-</span> val <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>[i].<span class="pl-c1">valueOf</span>() <span class="pl-k">-</span> val <span class="pl-k">&lt;</span> <span class="pl-c1">1000</span><span class="pl-k">*</span><span class="pl-c1">60</span><span class="pl-k">*</span><span class="pl-c1">60</span><span class="pl-k">*</span><span class="pl-c1">24</span>)</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> i;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">remove</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-c1">splice</span>(i,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">replace</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">new_array</span>){</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>new_array)</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(new_array))</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">					new_array <span class="pl-k">=</span> [new_array];</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-c1">clear</span>();</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, new_array);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">clear</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-c1">length</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">copy</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> a <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DateArray</span>();</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">a</span>.<span class="pl-c1">replace</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> a;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> a <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">a</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(a, <span class="pl-v">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-en">extend</span>(a, extras);</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> a;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">	})();</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// Picker object</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> <span class="pl-en">Datepicker</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">options</span>){</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-c1">data</span>(element, <span class="pl-s"><span class="pl-pds">&#39;</span>datepicker<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">_process_options</span>(options);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">dates</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DateArray</span>();</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span>;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">element</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(element);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">isInput</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">inputField</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">isInput</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span> <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">component</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>date<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.add-on, .input-group-addon, .btn<span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">component</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">component</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">component</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">isInline</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">component</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">picker</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">template</span>);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Checking templates and inserting</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-en">_check_template</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">templates</span>.<span class="pl-smi">leftArrow</span>)) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.prev<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">templates</span>.<span class="pl-smi">leftArrow</span>);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-en">_check_template</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">templates</span>.<span class="pl-smi">rightArrow</span>)) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.next<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">templates</span>.<span class="pl-smi">rightArrow</span>);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">_buildEvents</span>();</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">_attachEvents</span>();</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">isInline</span>){</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-inline<span class="pl-pds">&#39;</span></span>).<span class="pl-en">appendTo</span>(<span class="pl-v">this</span>.<span class="pl-smi">element</span>);</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-dropdown dropdown-menu<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">rtl</span>){</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-rtl<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">calendarWeeks</span>) {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colspan<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">val</span>){</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">Number</span>(val) <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">_allow_update</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">setStartDate</span>(<span class="pl-v">this</span>.<span class="pl-smi">_o</span>.<span class="pl-smi">startDate</span>);</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">setEndDate</span>(<span class="pl-v">this</span>.<span class="pl-smi">_o</span>.<span class="pl-smi">endDate</span>);</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">setDaysOfWeekDisabled</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekDisabled</span>);</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">setDaysOfWeekHighlighted</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekHighlighted</span>);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">setDatesDisabled</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span>);</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">setViewMode</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startView</span>);</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">fillDow</span>();</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">fillMonths</span>();</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">_allow_update</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">isInline</span>){</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">Datepicker</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">constructor</span>: Datepicker,</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">		_resolveViewName: <span class="pl-k">function</span>(<span class="pl-smi">view</span>){</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">viewModes</span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">viewMode</span>){</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (view <span class="pl-k">===</span> i <span class="pl-k">||</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(view, <span class="pl-smi">viewMode</span>.<span class="pl-smi">names</span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">					view <span class="pl-k">=</span> i;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> view;</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_resolveDaysOfWeek</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">daysOfWeek</span>){</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(daysOfWeek))</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">				daysOfWeek <span class="pl-k">=</span> <span class="pl-smi">daysOfWeek</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[,<span class="pl-c1">\s</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>);</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(daysOfWeek, <span class="pl-c1">Number</span>);</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_check_template</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">tmp</span>){</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// If empty</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (tmp <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> tmp <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// If no html, everything ok</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ((<span class="pl-smi">tmp</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[&lt;&gt;]</span><span class="pl-pds">/</span>g</span>) <span class="pl-k">||</span> []).<span class="pl-c1">length</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Checking if html is fine</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> jDom <span class="pl-k">=</span> <span class="pl-en">$</span>(tmp);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">jDom</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">catch</span> (ex) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_process_options</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">opts</span>){</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Store raw options for reference</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">_o</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({}, <span class="pl-v">this</span>.<span class="pl-smi">_o</span>, opts);</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Processed options</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> o <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({}, <span class="pl-v">this</span>.<span class="pl-smi">_o</span>);</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Check if &quot;de-DE&quot; style date is available, if not language should</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// fallback to 2 letter code eg &quot;de&quot;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> lang <span class="pl-k">=</span> <span class="pl-smi">o</span>.<span class="pl-c1">language</span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>dates[lang]){</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">				lang <span class="pl-k">=</span> <span class="pl-smi">lang</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>dates[lang])</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">					lang <span class="pl-k">=</span> <span class="pl-smi">defaults</span>.<span class="pl-c1">language</span>;</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-c1">language</span> <span class="pl-k">=</span> lang;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Retrieve view index from any aliases</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">startView</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_resolveViewName</span>(<span class="pl-smi">o</span>.<span class="pl-smi">startView</span>);</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">minViewMode</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_resolveViewName</span>(<span class="pl-smi">o</span>.<span class="pl-smi">minViewMode</span>);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">maxViewMode</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_resolveViewName</span>(<span class="pl-smi">o</span>.<span class="pl-smi">maxViewMode</span>);</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Check view is between min and max</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">startView</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">minViewMode</span>, <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">maxViewMode</span>, <span class="pl-smi">o</span>.<span class="pl-smi">startView</span>));</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// true, false, or Number &gt; 0</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span> <span class="pl-k">!==</span> <span class="pl-c1">true</span>){</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span> <span class="pl-k">=</span> <span class="pl-c1">Number</span>(<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span>) <span class="pl-k">||</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span> <span class="pl-k">!==</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-smi">o</span>.<span class="pl-smi">multidate</span>);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">multidateSeparator</span> <span class="pl-k">=</span> <span class="pl-c1">String</span>(<span class="pl-smi">o</span>.<span class="pl-smi">multidateSeparator</span>);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">weekStart</span> <span class="pl-k">%=</span> <span class="pl-c1">7</span>;</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">weekEnd</span> <span class="pl-k">=</span> (<span class="pl-smi">o</span>.<span class="pl-smi">weekStart</span> <span class="pl-k">+</span> <span class="pl-c1">6</span>) <span class="pl-k">%</span> <span class="pl-c1">7</span>;</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> format <span class="pl-k">=</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">parseFormat</span>(<span class="pl-smi">o</span>.<span class="pl-smi">format</span>);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span>){</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!!</span><span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>){</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span>)</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_local_to_utc</span>(<span class="pl-v">this</span>.<span class="pl-en">_zero_time</span>(<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>));</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">=</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">parseDate</span>(<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>, format, <span class="pl-smi">o</span>.<span class="pl-c1">language</span>, <span class="pl-smi">o</span>.<span class="pl-smi">assumeNearbyYear</span>);</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span>;</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">!==</span> <span class="pl-c1">Infinity</span>){</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!!</span><span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>){</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span>)</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_local_to_utc</span>(<span class="pl-v">this</span>.<span class="pl-en">_zero_time</span>(<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>));</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">=</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">parseDate</span>(<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>, format, <span class="pl-smi">o</span>.<span class="pl-c1">language</span>, <span class="pl-smi">o</span>.<span class="pl-smi">assumeNearbyYear</span>);</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">=</span> <span class="pl-c1">Infinity</span>;</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekDisabled</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_resolveDaysOfWeek</span>(<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekDisabled</span><span class="pl-k">||</span>[]);</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekHighlighted</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_resolveDaysOfWeek</span>(<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekHighlighted</span><span class="pl-k">||</span>[]);</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span> <span class="pl-k">=</span> <span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span><span class="pl-k">||</span>[];</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(<span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span>)) {</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span> <span class="pl-k">=</span> <span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">parseDate</span>(d, format, <span class="pl-smi">o</span>.<span class="pl-c1">language</span>, <span class="pl-smi">o</span>.<span class="pl-smi">assumeNearbyYear</span>);</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> plc <span class="pl-k">=</span> <span class="pl-c1">String</span>(<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>).<span class="pl-c1">toLowerCase</span>().<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>),</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">				_plc <span class="pl-k">=</span> <span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">			plc <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">grep</span>(plc, <span class="pl-k">function</span>(<span class="pl-smi">word</span>){</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>auto<span class="pl-k">|</span>left<span class="pl-k">|</span>right<span class="pl-k">|</span>top<span class="pl-k">|</span>bottom<span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(word);</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span> <span class="pl-k">=</span> {x<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>, y<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>};</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>_plc <span class="pl-k">||</span> _plc <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">				; <span class="pl-c">// no action</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">plc</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">switch</span> (plc[<span class="pl-c1">0</span>]){</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> plc[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> plc[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">				_plc <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">grep</span>(plc, <span class="pl-k">function</span>(<span class="pl-smi">word</span>){</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>left<span class="pl-k">|</span>right<span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(word);</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> _plc[<span class="pl-c1">0</span>] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">				_plc <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">grep</span>(plc, <span class="pl-k">function</span>(<span class="pl-smi">word</span>){</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>top<span class="pl-k">|</span>bottom<span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(word);</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> _plc[<span class="pl-c1">0</span>] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span>) {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> year <span class="pl-k">=</span> <span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span>.<span class="pl-smi">year</span> <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getFullYear</span>();</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> month <span class="pl-k">=</span> <span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span>.<span class="pl-smi">month</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> day <span class="pl-k">=</span> <span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span>.<span class="pl-smi">day</span> <span class="pl-k">||</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span> <span class="pl-k">=</span> <span class="pl-en">UTCDate</span>(year, month, day);</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span> <span class="pl-k">=</span> <span class="pl-en">UTCToday</span>();</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">		_events<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">		_secondaryEvents<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_applyEvents</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">evs</span>){</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, el, ch, ev; i <span class="pl-k">&lt;</span> <span class="pl-smi">evs</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">				el <span class="pl-k">=</span> evs[i][<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (evs[i].<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">2</span>){</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">					ch <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">					ev <span class="pl-k">=</span> evs[i][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (evs[i].<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">3</span>){</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">					ch <span class="pl-k">=</span> evs[i][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">					ev <span class="pl-k">=</span> evs[i][<span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">el</span>.<span class="pl-en">on</span>(ev, ch);</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_unapplyEvents</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">evs</span>){</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, el, ev, ch; i <span class="pl-k">&lt;</span> <span class="pl-smi">evs</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">				el <span class="pl-k">=</span> evs[i][<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (evs[i].<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">2</span>){</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">					ch <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">					ev <span class="pl-k">=</span> evs[i][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (evs[i].<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">3</span>){</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">					ch <span class="pl-k">=</span> evs[i][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">					ev <span class="pl-k">=</span> evs[i][<span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">el</span>.<span class="pl-en">off</span>(ev, ch);</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_buildEvents</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> events <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">                keyup<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span>, [<span class="pl-c1">27</span>, <span class="pl-c1">37</span>, <span class="pl-c1">39</span>, <span class="pl-c1">38</span>, <span class="pl-c1">40</span>, <span class="pl-c1">32</span>, <span class="pl-c1">13</span>, <span class="pl-c1">9</span>]) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">                        <span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">                keydown<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">keydown</span>, <span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">                paste<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">paste</span>, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">showOnFocus</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">events</span>.<span class="pl-smi">focus</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">show</span>, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">isInput</span>) { <span class="pl-c">// single input</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">                <span class="pl-v">this</span>.<span class="pl-smi">_events</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">                    [<span class="pl-v">this</span>.<span class="pl-smi">element</span>, events]</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">                ];</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// component: input + button</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">component</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">                <span class="pl-v">this</span>.<span class="pl-smi">_events</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c">// For components that are not readonly, allow keyboard nav</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">                    [<span class="pl-v">this</span>.<span class="pl-smi">inputField</span>, events],</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">                    [<span class="pl-v">this</span>.<span class="pl-smi">component</span>, {</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">                        click<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">show</span>, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">                    }]</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">                ];</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">_events</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">					[<span class="pl-v">this</span>.<span class="pl-smi">element</span>, {</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">						click<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">show</span>, <span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">						keydown<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">keydown</span>, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">					}]</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">				];</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">_events</span>.<span class="pl-c1">push</span>(</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Component: listen for blur on element descendants</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">				[<span class="pl-v">this</span>.<span class="pl-smi">element</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">					blur<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">_focused_from</span> <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span>;</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">					}, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">				}],</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Input: listen for blur on element</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">				[<span class="pl-v">this</span>.<span class="pl-smi">element</span>, {</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">					blur<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">_focused_from</span> <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span>;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">					}, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">				}]</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">immediateUpdates</span>) {</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Trigger input updates immediately on changed year/month</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">_events</span>.<span class="pl-c1">push</span>([<span class="pl-v">this</span>.<span class="pl-smi">element</span>, {</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>changeYear changeMonth<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">update</span>(<span class="pl-smi">e</span>.<span class="pl-smi">date</span>);</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">					}, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">				}]);</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">_secondaryEvents</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">				[<span class="pl-v">this</span>.<span class="pl-smi">picker</span>, {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">					click<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">click</span>, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">				}],</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">				[<span class="pl-v">this</span>.<span class="pl-smi">picker</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>.prev, .next<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">					click<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">navArrowsClick</span>, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">				}],</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">				[<span class="pl-en">$</span>(<span class="pl-c1">window</span>), {</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">					resize<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">place</span>, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">				}],</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">				[<span class="pl-en">$</span>(<span class="pl-c1">document</span>), {</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown touchstart<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// Clicked outside the datepicker, hide it</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span>(</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">							<span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">is</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">							<span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">find</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-c1">length</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">							<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">is</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">							<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-c1">length</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">							<span class="pl-v">this</span>.<span class="pl-smi">isInline</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">						)){</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">							<span class="pl-v">this</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">					}, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">				}]</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">			];</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_attachEvents</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_detachEvents</span>();</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_applyEvents</span>(<span class="pl-v">this</span>.<span class="pl-smi">_events</span>);</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_detachEvents</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_unapplyEvents</span>(<span class="pl-v">this</span>.<span class="pl-smi">_events</span>);</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_attachSecondaryEvents</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_detachSecondaryEvents</span>();</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_applyEvents</span>(<span class="pl-v">this</span>.<span class="pl-smi">_secondaryEvents</span>);</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_detachSecondaryEvents</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_unapplyEvents</span>(<span class="pl-v">this</span>.<span class="pl-smi">_secondaryEvents</span>);</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_trigger</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>, <span class="pl-smi">altdate</span>){</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> date <span class="pl-k">=</span> altdate <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">get</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>),</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">				local_date <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_utc_to_local</span>(date);</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">trigger</span>({</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">				type<span class="pl-k">:</span> <span class="pl-c1">event</span>,</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">				date<span class="pl-k">:</span> local_date,</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">				dates<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>, <span class="pl-v">this</span>.<span class="pl-smi">_utc_to_local</span>),</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">				format<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">ix</span>, <span class="pl-smi">format</span>){</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-v">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">						ix <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">						format <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">format</span>;</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> ix <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">						format <span class="pl-k">=</span> ix;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">						ix <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">					format <span class="pl-k">=</span> format <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">format</span>;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> date <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">get</span>(ix);</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">formatDate</span>(date, format, <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>);</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">show</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> (<span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>readonly<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">enableOnReadonly</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>))</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">isInline</span>)</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">appendTo</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">container</span>);</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">place</span>();</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_attachSecondaryEvents</span>();</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ((<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-smi">msMaxTouchPoints</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ontouchstart<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-c1">document</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">disableTouchKeyboard</span>) {</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">$</span>(<span class="pl-v">this</span>.<span class="pl-smi">element</span>).<span class="pl-c1">blur</span>();</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">hide</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">isInline</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">hide</span>().<span class="pl-en">detach</span>();</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_detachSecondaryEvents</span>();</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">setViewMode</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startView</span>);</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">forceParse</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-en">val</span>())</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">setValue</span>();</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">destroy</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_detachEvents</span>();</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_detachSecondaryEvents</span>();</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">data</span>().<span class="pl-smi">datepicker</span>;</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">isInput</span>){</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">data</span>().<span class="pl-smi">date</span>;</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">paste</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> dateString;</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">originalEvent</span>.<span class="pl-smi">clipboardData</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">originalEvent</span>.<span class="pl-smi">clipboardData</span>.<span class="pl-smi">types</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>text/plain<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">e</span>.<span class="pl-smi">originalEvent</span>.<span class="pl-smi">clipboardData</span>.<span class="pl-smi">types</span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">				dateString <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">originalEvent</span>.<span class="pl-smi">clipboardData</span>.<span class="pl-en">getData</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>text/plain<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">clipboardData</span>) {</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">				dateString <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">clipboardData</span>.<span class="pl-en">getData</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Text<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-c1">setDate</span>(dateString);</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_utc_to_local</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">utc</span>){</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> utc <span class="pl-k">&amp;&amp;</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-smi">utc</span>.<span class="pl-c1">getTime</span>() <span class="pl-k">+</span> (<span class="pl-smi">utc</span>.<span class="pl-c1">getTimezoneOffset</span>()<span class="pl-k">*</span><span class="pl-c1">60000</span>));</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_local_to_utc</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">local</span>){</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> local <span class="pl-k">&amp;&amp;</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-smi">local</span>.<span class="pl-c1">getTime</span>() <span class="pl-k">-</span> (<span class="pl-smi">local</span>.<span class="pl-c1">getTimezoneOffset</span>()<span class="pl-k">*</span><span class="pl-c1">60000</span>));</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_zero_time</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">local</span>){</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> local <span class="pl-k">&amp;&amp;</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-smi">local</span>.<span class="pl-c1">getFullYear</span>(), <span class="pl-smi">local</span>.<span class="pl-c1">getMonth</span>(), <span class="pl-smi">local</span>.<span class="pl-c1">getDate</span>());</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_zero_utc_time</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">utc</span>){</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> utc <span class="pl-k">&amp;&amp;</span> <span class="pl-en">UTCDate</span>(<span class="pl-smi">utc</span>.<span class="pl-c1">getUTCFullYear</span>(), <span class="pl-smi">utc</span>.<span class="pl-c1">getUTCMonth</span>(), <span class="pl-smi">utc</span>.<span class="pl-c1">getUTCDate</span>());</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getDates</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>, <span class="pl-v">this</span>.<span class="pl-smi">_utc_to_local</span>);</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getUTCDates</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(d);</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">_utc_to_local</span>(<span class="pl-v">this</span>.<span class="pl-c1">getUTCDate</span>());</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getUTCDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> selected_date <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">get</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (selected_date <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(selected_date);</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">clearDates</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-en">val</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeDate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">autoclose</span>) {</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setDates</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(<span class="pl-v">arguments</span>[<span class="pl-c1">0</span>]) <span class="pl-k">?</span> <span class="pl-v">arguments</span>[<span class="pl-c1">0</span>] <span class="pl-k">:</span> <span class="pl-v">arguments</span>;</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">update</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, args);</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeDate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">setValue</span>();</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setUTCDates</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(<span class="pl-v">arguments</span>[<span class="pl-c1">0</span>]) <span class="pl-k">?</span> <span class="pl-v">arguments</span>[<span class="pl-c1">0</span>] <span class="pl-k">:</span> <span class="pl-v">arguments</span>;</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">setDates</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, <span class="pl-smi">$</span>.<span class="pl-en">map</span>(args, <span class="pl-v">this</span>.<span class="pl-smi">_utc_to_local</span>));</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">		setDate<span class="pl-k">:</span> <span class="pl-en">alias</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>setDates<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">		setUTCDate<span class="pl-k">:</span> <span class="pl-en">alias</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>setUTCDates<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">		remove<span class="pl-k">:</span> <span class="pl-en">alias</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>destroy<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setValue</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> formatted <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">getFormattedDate</span>();</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-en">val</span>(formatted);</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getFormattedDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">format</span>){</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (format <span class="pl-k">===</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">				format <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">format</span>;</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> lang <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>;</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">formatDate</span>(d, format, lang);</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">			}).<span class="pl-c1">join</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">multidateSeparator</span>);</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getStartDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>;</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setStartDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">startDate</span>){</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_process_options</span>({startDate<span class="pl-k">:</span> startDate});</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">updateNavArrows</span>();</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getEndDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>;</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setEndDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">endDate</span>){</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_process_options</span>({endDate<span class="pl-k">:</span> endDate});</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">updateNavArrows</span>();</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setDaysOfWeekDisabled</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">daysOfWeekDisabled</span>){</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_process_options</span>({daysOfWeekDisabled<span class="pl-k">:</span> daysOfWeekDisabled});</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setDaysOfWeekHighlighted</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">daysOfWeekHighlighted</span>){</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_process_options</span>({daysOfWeekHighlighted<span class="pl-k">:</span> daysOfWeekHighlighted});</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setDatesDisabled</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">datesDisabled</span>){</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_process_options</span>({datesDisabled<span class="pl-k">:</span> datesDisabled});</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">place</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">isInline</span>)</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> calendarWidth <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">outerWidth</span>(),</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">				calendarHeight <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">outerHeight</span>(),</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">				visualPadding <span class="pl-k">=</span> <span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">				container <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">container</span>),</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">				windowWidth <span class="pl-k">=</span> <span class="pl-smi">container</span>.<span class="pl-c1">width</span>(),</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">				scrollTop <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">container</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">scrollTop</span>() <span class="pl-k">:</span> <span class="pl-smi">container</span>.<span class="pl-en">scrollTop</span>(),</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">				appendOffset <span class="pl-k">=</span> <span class="pl-smi">container</span>.<span class="pl-en">offset</span>();</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> parentsZindex <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">parents</span>().<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> itemZIndex <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>z-index<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (itemZIndex <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> itemZIndex <span class="pl-k">!==</span> <span class="pl-c1">0</span>) <span class="pl-smi">parentsZindex</span>.<span class="pl-c1">push</span>(<span class="pl-c1">parseInt</span>(itemZIndex));</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> zIndex <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-smi">max</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">Math</span>, parentsZindex) <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">zIndexOffset</span>;</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> offset <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">component</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">component</span>.<span class="pl-c1">parent</span>().<span class="pl-en">offset</span>() <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">offset</span>();</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> height <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">component</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">component</span>.<span class="pl-c1">outerHeight</span>(<span class="pl-c1">true</span>) <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">outerHeight</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">component</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">component</span>.<span class="pl-c1">outerWidth</span>(<span class="pl-c1">true</span>) <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">outerWidth</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> left <span class="pl-k">=</span> <span class="pl-smi">offset</span>.<span class="pl-c1">left</span> <span class="pl-k">-</span> <span class="pl-smi">appendOffset</span>.<span class="pl-c1">left</span>,</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">				top <span class="pl-k">=</span> <span class="pl-smi">offset</span>.<span class="pl-c1">top</span> <span class="pl-k">-</span> <span class="pl-smi">appendOffset</span>.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">container</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">				top <span class="pl-k">+=</span> scrollTop;</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">removeClass</span>(</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-orient-top datepicker-orient-bottom <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-orient-right datepicker-orient-left<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">x</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-orient-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">x</span>);</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">x</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">					left <span class="pl-k">-=</span> calendarWidth <span class="pl-k">-</span> width;</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// auto x orientation is best-placement: if it crosses a window</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// edge, fudge it sideways</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">offset</span>.<span class="pl-c1">left</span> <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// component is outside the window on the left side. Move it into visible range</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-orient-left<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">					left <span class="pl-k">-=</span> <span class="pl-smi">offset</span>.<span class="pl-c1">left</span> <span class="pl-k">-</span> visualPadding;</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (left <span class="pl-k">+</span> calendarWidth <span class="pl-k">&gt;</span> windowWidth) {</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// the calendar passes the widow right edge. Align it to component right side</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-orient-right<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">					left <span class="pl-k">+=</span> width <span class="pl-k">-</span> calendarWidth;</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// Default to left</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-orient-left<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// auto y orientation is best-situation: top or bottom, no fudging,</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// decision based on which shows more of the calendar</span></td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> yorient <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">orientation</span>.<span class="pl-c1">y</span>,</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">				top_overflow;</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (yorient <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">				top_overflow <span class="pl-k">=</span> <span class="pl-k">-</span>scrollTop <span class="pl-k">+</span> top <span class="pl-k">-</span> calendarHeight;</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">				yorient <span class="pl-k">=</span> top_overflow <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-orient-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> yorient);</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (yorient <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">				top <span class="pl-k">-=</span> calendarHeight <span class="pl-k">+</span> <span class="pl-c1">parseInt</span>(<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>padding-top<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">				top <span class="pl-k">+=</span> height;</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">rtl</span>) {</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> right <span class="pl-k">=</span> windowWidth <span class="pl-k">-</span> (left <span class="pl-k">+</span> width);</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">css</span>({</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">					top<span class="pl-k">:</span> top,</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">					right<span class="pl-k">:</span> right,</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">					zIndex<span class="pl-k">:</span> zIndex</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">css</span>({</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">					top<span class="pl-k">:</span> top,</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">					left<span class="pl-k">:</span> left,</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">					zIndex<span class="pl-k">:</span> zIndex</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">		_allow_update<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">update</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">_allow_update</span>)</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> oldDates <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">copy</span>(),</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">				dates <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">				fromArgs <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">arguments</span>.<span class="pl-c1">length</span>){</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-v">arguments</span>, <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">date</span>){</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (date <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span>)</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">						date <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_local_to_utc</span>(date);</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">dates</span>.<span class="pl-c1">push</span>(date);</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">				fromArgs <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">				dates <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">isInput</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">val</span>()</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>date<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (dates <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span>)</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">					dates <span class="pl-k">=</span> <span class="pl-smi">dates</span>.<span class="pl-c1">split</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">multidateSeparator</span>);</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">					dates <span class="pl-k">=</span> [dates];</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">data</span>().<span class="pl-smi">date</span>;</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">			dates <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(dates, <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">date</span>){</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">parseDate</span>(date, <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">format</span>, <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>, <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">assumeNearbyYear</span>);</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">			dates <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">grep</span>(dates, <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">date</span>){</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> (</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-en">dateWithinRange</span>(date) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">!</span>date</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-v">this</span>), <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">replace</span>(dates);</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">length</span>)</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">get</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>)</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>);</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">&gt;</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>)</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>);</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span>;</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (fromArgs){</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// setting date by clicking</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">setValue</span>();</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">change</span>();</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">length</span>){</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// setting date by typing</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-c1">String</span>(oldDates) <span class="pl-k">!==</span> <span class="pl-c1">String</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>) <span class="pl-k">&amp;&amp;</span> fromArgs) {</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeDate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">change</span>();</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">oldDates</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>clearDate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">change</span>();</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">fillDow</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> dowCnt <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">weekStart</span>,</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">				html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">calendarWeeks</span>){</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">				html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th class=&quot;cw&quot;&gt;&amp;#160;&lt;/th&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (dowCnt <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">weekStart</span> <span class="pl-k">+</span> <span class="pl-c1">7</span>){</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">				html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th class=&quot;dow<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(dowCnt, <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekDisabled</span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span> disabled<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>dates[<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>].<span class="pl-smi">daysMin</span>[(dowCnt<span class="pl-k">++</span>)<span class="pl-k">%</span><span class="pl-c1">7</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/th&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">			html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-days thead<span class="pl-pds">&#39;</span></span>).<span class="pl-en">append</span>(html);</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">fillMonths</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> localDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">_utc_to_local</span>(<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>);</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">			i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (i <span class="pl-k">&lt;</span> <span class="pl-c1">12</span>){</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> focused <span class="pl-k">=</span> localDate <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">localDate</span>.<span class="pl-c1">getMonth</span>() <span class="pl-k">===</span> i <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> focused<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">				html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;month<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> focused <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> dates[<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>].<span class="pl-smi">monthsShort</span>[i<span class="pl-k">++</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-months td<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(html);</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setRange</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">range</span>){</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>range <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">range</span>.<span class="pl-c1">length</span>)</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">range</span>;</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">range</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(range, <span class="pl-k">function</span>(<span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">valueOf</span>();</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getClassNames</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>){</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> cls <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">				year <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">getUTCFullYear</span>(),</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">				month <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">getUTCMonth</span>(),</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">				today <span class="pl-k">=</span> <span class="pl-en">UTCToday</span>();</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">date</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">&lt;</span> year <span class="pl-k">||</span> (<span class="pl-smi">date</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">===</span> year <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">date</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">&lt;</span> month)){</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>old<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">date</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">&gt;</span> year <span class="pl-k">||</span> (<span class="pl-smi">date</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">===</span> year <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">date</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">&gt;</span> month)){</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>new<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">date</span>.<span class="pl-c1">valueOf</span>() <span class="pl-k">===</span> <span class="pl-v">this</span>.<span class="pl-smi">focusDate</span>.<span class="pl-c1">valueOf</span>())</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focused<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Compare internal UTC date with UTC today, not local today</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">todayHighlight</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isUTCEquals</span>(date, today)) {</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>today<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">contains</span>(date) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-en">dateWithinRange</span>(date)){</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-en">dateIsDisabled</span>(date)){</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>disabled-date<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(<span class="pl-smi">date</span>.<span class="pl-c1">getUTCDay</span>(), <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekHighlighted</span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>highlighted<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">range</span>){</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (date <span class="pl-k">&gt;</span> <span class="pl-v">this</span>.<span class="pl-smi">range</span>[<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> date <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.<span class="pl-smi">range</span>[<span class="pl-v">this</span>.<span class="pl-smi">range</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]){</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>range<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(<span class="pl-smi">date</span>.<span class="pl-c1">valueOf</span>(), <span class="pl-v">this</span>.<span class="pl-smi">range</span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>selected<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">date</span>.<span class="pl-c1">valueOf</span>() <span class="pl-k">===</span> <span class="pl-v">this</span>.<span class="pl-smi">range</span>[<span class="pl-c1">0</span>]){</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>range-start<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">date</span>.<span class="pl-c1">valueOf</span>() <span class="pl-k">===</span> <span class="pl-v">this</span>.<span class="pl-smi">range</span>[<span class="pl-v">this</span>.<span class="pl-smi">range</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]){</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">cls</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>range-end<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> cls;</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_fill_yearsView</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">selector</span>, <span class="pl-smi">cssClass</span>, <span class="pl-smi">factor</span>, <span class="pl-smi">step</span>, <span class="pl-smi">currentYear</span>, <span class="pl-smi">startYear</span>, <span class="pl-smi">endYear</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">			html      <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">			view      <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(selector);</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">			year      <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(currentYear <span class="pl-k">/</span> factor, <span class="pl-c1">10</span>) <span class="pl-k">*</span> factor;</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">			startStep <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(startYear <span class="pl-k">/</span> step, <span class="pl-c1">10</span>) <span class="pl-k">*</span> step;</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">			endStep   <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(endYear <span class="pl-k">/</span> step, <span class="pl-c1">10</span>) <span class="pl-k">*</span> step;</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">			steps     <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">d</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">/</span> step, <span class="pl-c1">10</span>) <span class="pl-k">*</span> step;</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">view</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-switch<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(year <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (year <span class="pl-k">+</span> step <span class="pl-k">*</span> <span class="pl-c1">9</span>));</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">			thisYear <span class="pl-k">=</span> year <span class="pl-k">-</span> step;</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">11</span>; i <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">				classes <span class="pl-k">=</span> [cssClass];</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">				tooltip <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (i <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">classes</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>old<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (i <span class="pl-k">===</span> <span class="pl-c1">10</span>) {</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">classes</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>new<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(thisYear, steps) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">classes</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (thisYear <span class="pl-k">&lt;</span> startStep <span class="pl-k">||</span> thisYear <span class="pl-k">&gt;</span> endStep) {</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">classes</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (thisYear <span class="pl-k">===</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">getFullYear</span>()) {</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">				  <span class="pl-smi">classes</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focused<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (callback <span class="pl-k">!==</span> <span class="pl-smi">$</span>.<span class="pl-smi">noop</span>) {</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">					before <span class="pl-k">=</span> <span class="pl-en">callback</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(thisYear, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (before <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> before <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {enabled<span class="pl-k">:</span> before};</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> before <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {classes<span class="pl-k">:</span> before};</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-smi">enabled</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">classes</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-c1">classes</span>) {</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">						classes <span class="pl-k">=</span> <span class="pl-smi">classes</span>.<span class="pl-c1">concat</span>(<span class="pl-smi">before</span>.<span class="pl-c1">classes</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>));</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-smi">tooltip</span>) {</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">						tooltip <span class="pl-k">=</span> <span class="pl-smi">before</span>.<span class="pl-smi">tooltip</span>;</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">				html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">classes</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (tooltip <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> title=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> tooltip <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> thisYear <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">				thisYear <span class="pl-k">+=</span> step;</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">view</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>td<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(html);</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">fill</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>),</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">				year <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">getUTCFullYear</span>(),</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">				month <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">getUTCMonth</span>(),</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">				startYear <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span>,</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">				startMonth <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span>,</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">				endYear <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">!==</span> <span class="pl-c1">Infinity</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">:</span> <span class="pl-c1">Infinity</span>,</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">				endMonth <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">!==</span> <span class="pl-c1">Infinity</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">:</span> <span class="pl-c1">Infinity</span>,</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">				todaytxt <span class="pl-k">=</span> dates[<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>].<span class="pl-smi">today</span> <span class="pl-k">||</span> dates[<span class="pl-s"><span class="pl-pds">&#39;</span>en<span class="pl-pds">&#39;</span></span>].<span class="pl-smi">today</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">				cleartxt <span class="pl-k">=</span> dates[<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>].<span class="pl-c1">clear</span> <span class="pl-k">||</span> dates[<span class="pl-s"><span class="pl-pds">&#39;</span>en<span class="pl-pds">&#39;</span></span>].<span class="pl-c1">clear</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">				titleFormat <span class="pl-k">=</span> dates[<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>].<span class="pl-smi">titleFormat</span> <span class="pl-k">||</span> dates[<span class="pl-s"><span class="pl-pds">&#39;</span>en<span class="pl-pds">&#39;</span></span>].<span class="pl-smi">titleFormat</span>,</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">				tooltip,</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">				before;</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">isNaN</span>(year) <span class="pl-k">||</span> <span class="pl-c1">isNaN</span>(month))</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-days .datepicker-switch<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">text</span>(<span class="pl-smi">DPGlobal</span>.<span class="pl-en">formatDate</span>(d, titleFormat, <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>));</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tfoot .today<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">text</span>(todaytxt)</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">						.<span class="pl-en">toggle</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">todayBtn</span> <span class="pl-k">!==</span> <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tfoot .clear<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">text</span>(cleartxt)</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">						.<span class="pl-en">toggle</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">clearBtn</span> <span class="pl-k">!==</span> <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>thead .datepicker-title<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">text</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">title</span>)</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">						.<span class="pl-en">toggle</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">title</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">updateNavArrows</span>();</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">fillMonths</span>();</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> prevMonth <span class="pl-k">=</span> <span class="pl-en">UTCDate</span>(year, month, <span class="pl-c1">0</span>),</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">				day <span class="pl-k">=</span> <span class="pl-smi">prevMonth</span>.<span class="pl-c1">getUTCDate</span>();</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">prevMonth</span>.<span class="pl-c1">setUTCDate</span>(day <span class="pl-k">-</span> (<span class="pl-smi">prevMonth</span>.<span class="pl-c1">getUTCDay</span>() <span class="pl-k">-</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">weekStart</span> <span class="pl-k">+</span> <span class="pl-c1">7</span>)<span class="pl-k">%</span><span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nextMonth <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(prevMonth);</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">prevMonth</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">&lt;</span> <span class="pl-c1">100</span>){</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">nextMonth</span>.<span class="pl-c1">setUTCFullYear</span>(<span class="pl-smi">prevMonth</span>.<span class="pl-c1">getUTCFullYear</span>());</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">nextMonth</span>.<span class="pl-c1">setUTCDate</span>(<span class="pl-smi">nextMonth</span>.<span class="pl-c1">getUTCDate</span>() <span class="pl-k">+</span> <span class="pl-c1">42</span>);</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">			nextMonth <span class="pl-k">=</span> <span class="pl-smi">nextMonth</span>.<span class="pl-c1">valueOf</span>();</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> html <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> weekDay, clsName;</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (<span class="pl-smi">prevMonth</span>.<span class="pl-c1">valueOf</span>() <span class="pl-k">&lt;</span> nextMonth){</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">				weekDay <span class="pl-k">=</span> <span class="pl-smi">prevMonth</span>.<span class="pl-c1">getUTCDay</span>();</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (weekDay <span class="pl-k">===</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">weekStart</span>){</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">calendarWeeks</span>){</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// ISO 8601: First week contains first thursday.</span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// ISO also states week starts on Monday, but we can be more abstract here.</span></td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span></td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// Start of current week: based on weekstart/current date</span></td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">							ws <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-k">+</span>prevMonth <span class="pl-k">+</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">weekStart</span> <span class="pl-k">-</span> weekDay <span class="pl-k">-</span> <span class="pl-c1">7</span>) <span class="pl-k">%</span> <span class="pl-c1">7</span> <span class="pl-k">*</span> <span class="pl-c1">864e5</span>),</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// Thursday of this week</span></td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">							th <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">Number</span>(ws) <span class="pl-k">+</span> (<span class="pl-c1">7</span> <span class="pl-k">+</span> <span class="pl-c1">4</span> <span class="pl-k">-</span> <span class="pl-smi">ws</span>.<span class="pl-c1">getUTCDay</span>()) <span class="pl-k">%</span> <span class="pl-c1">7</span> <span class="pl-k">*</span> <span class="pl-c1">864e5</span>),</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// First Thursday of year, year from thursday</span></td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">							yth <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">Number</span>(yth <span class="pl-k">=</span> <span class="pl-en">UTCDate</span>(<span class="pl-smi">th</span>.<span class="pl-c1">getUTCFullYear</span>(), <span class="pl-c1">0</span>, <span class="pl-c1">1</span>)) <span class="pl-k">+</span> (<span class="pl-c1">7</span> <span class="pl-k">+</span> <span class="pl-c1">4</span> <span class="pl-k">-</span> <span class="pl-smi">yth</span>.<span class="pl-c1">getUTCDay</span>()) <span class="pl-k">%</span> <span class="pl-c1">7</span> <span class="pl-k">*</span> <span class="pl-c1">864e5</span>),</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// Calendar week: ms between thursdays, div ms per day, div 7 days</span></td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">							calWeek <span class="pl-k">=</span> (th <span class="pl-k">-</span> yth) <span class="pl-k">/</span> <span class="pl-c1">864e5</span> <span class="pl-k">/</span> <span class="pl-c1">7</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;td class=&quot;cw&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> calWeek <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/td&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">				clsName <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">getClassNames</span>(prevMonth);</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">clsName</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>day<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">beforeShowDay</span> <span class="pl-k">!==</span> <span class="pl-smi">$</span>.<span class="pl-smi">noop</span>){</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">					before <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-en">beforeShowDay</span>(<span class="pl-v">this</span>.<span class="pl-en">_utc_to_local</span>(prevMonth));</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (before <span class="pl-k">===</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> before <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {enabled<span class="pl-k">:</span> before};</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> before <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {classes<span class="pl-k">:</span> before};</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-smi">enabled</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">clsName</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-c1">classes</span>)</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">						clsName <span class="pl-k">=</span> <span class="pl-smi">clsName</span>.<span class="pl-c1">concat</span>(<span class="pl-smi">before</span>.<span class="pl-c1">classes</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>));</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-smi">tooltip</span>)</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">						tooltip <span class="pl-k">=</span> <span class="pl-smi">before</span>.<span class="pl-smi">tooltip</span>;</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// $.unique is deprecated on jQuery 3.x</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">				clsName <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">unique</span>(clsName);</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;td class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">clsName</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (tooltip <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> title=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>tooltip<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">dateCells</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> data-date=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>(<span class="pl-smi">prevMonth</span>.<span class="pl-c1">getTime</span>().<span class="pl-c1">toString</span>())<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">prevMonth</span>.<span class="pl-c1">getUTCDate</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/td&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">				tooltip <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (weekDay <span class="pl-k">===</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">weekEnd</span>){</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">prevMonth</span>.<span class="pl-c1">setUTCDate</span>(<span class="pl-smi">prevMonth</span>.<span class="pl-c1">getUTCDate</span>() <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-days tbody<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(<span class="pl-smi">html</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> monthsTitle <span class="pl-k">=</span> dates[<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-c1">language</span>].<span class="pl-smi">monthsTitle</span> <span class="pl-k">||</span> dates[<span class="pl-s"><span class="pl-pds">&#39;</span>en<span class="pl-pds">&#39;</span></span>].<span class="pl-smi">monthsTitle</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Months<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> months <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-months<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-switch<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">text</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">maxViewMode</span> <span class="pl-k">&lt;</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> monthsTitle <span class="pl-k">:</span> year)</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">							.<span class="pl-en">end</span>()</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tbody span<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">d</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">===</span> year)</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">months</span>.<span class="pl-en">eq</span>(<span class="pl-smi">d</span>.<span class="pl-c1">getUTCMonth</span>()).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (year <span class="pl-k">&lt;</span> startYear <span class="pl-k">||</span> year <span class="pl-k">&gt;</span> endYear){</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">months</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (year <span class="pl-k">===</span> startYear){</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">months</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, startMonth).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (year <span class="pl-k">===</span> endYear){</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">months</span>.<span class="pl-c1">slice</span>(endMonth<span class="pl-k">+</span><span class="pl-c1">1</span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">beforeShowMonth</span> <span class="pl-k">!==</span> <span class="pl-smi">$</span>.<span class="pl-smi">noop</span>){</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$</span>.<span class="pl-en">each</span>(months, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">month</span>){</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> moDate <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(year, i, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> before <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-smi">o</span>.<span class="pl-en">beforeShowMonth</span>(moDate);</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (before <span class="pl-k">===</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> before <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {enabled<span class="pl-k">:</span> before};</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> before <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">						before <span class="pl-k">=</span> {classes<span class="pl-k">:</span> before};</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-smi">enabled</span> <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">$</span>(month).<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">					    <span class="pl-en">$</span>(month).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-c1">classes</span>)</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">					    <span class="pl-en">$</span>(month).<span class="pl-en">addClass</span>(<span class="pl-smi">before</span>.<span class="pl-c1">classes</span>);</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">before</span>.<span class="pl-smi">tooltip</span>)</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">					    <span class="pl-en">$</span>(month).<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">before</span>.<span class="pl-smi">tooltip</span>);</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Generating decade/years picker</span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_fill_yearsView</span>(</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-years<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>year<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">				year,</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">				startYear,</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">				endYear,</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">beforeShowYear</span></td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Generating century/decades picker</span></td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_fill_yearsView</span>(</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-decades<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>decade<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">				year,</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">				startYear,</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">				endYear,</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">beforeShowDecade</span></td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Generating millennium/centuries picker</span></td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_fill_yearsView</span>(</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-centuries<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>century<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">1000</span>,</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">				year,</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">				startYear,</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">				endYear,</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">beforeShowCentury</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateNavArrows</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">_allow_update</span>)</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>),</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">				year <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">getUTCFullYear</span>(),</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">				month <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">getUTCMonth</span>(),</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">				prevState,</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">				nextState;</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">switch</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span>){</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">0</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">					prevState <span class="pl-k">=</span> (</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">						year <span class="pl-k">&lt;=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">						month <span class="pl-k">&lt;=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>.<span class="pl-c1">getUTCMonth</span>()</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">					);</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">					nextState <span class="pl-k">=</span> (</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">!==</span> <span class="pl-c1">Infinity</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">						year <span class="pl-k">&gt;=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">						month <span class="pl-k">&gt;=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>.<span class="pl-c1">getUTCMonth</span>()</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">					);</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">					prevState <span class="pl-k">=</span> (</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">						year <span class="pl-k">&lt;=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span>.<span class="pl-c1">getUTCFullYear</span>()</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">					);</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">					nextState <span class="pl-k">=</span> (</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span> <span class="pl-k">!==</span> <span class="pl-c1">Infinity</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">						year <span class="pl-k">&gt;=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>.<span class="pl-c1">getUTCFullYear</span>()</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">					);</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.prev<span class="pl-pds">&#39;</span></span>).<span class="pl-en">toggleClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>, prevState);</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.next<span class="pl-pds">&#39;</span></span>).<span class="pl-en">toggleClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>, nextState);</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">click</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> target, dir, day, year, month;</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">			target <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>);</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Clicked on the switch</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker-switch<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">setViewMode</span>(<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Clicked on today button</span></td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>today<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>day<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">setViewMode</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">_setDate</span>(<span class="pl-en">UTCToday</span>(), <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">todayBtn</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>linked<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-c1">null</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>view<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Clicked on clear button</span></td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>clear<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">clearDates</span>();</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Clicked on a day</span></td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>day<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">					day <span class="pl-k">=</span> <span class="pl-c1">Number</span>(<span class="pl-smi">target</span>.<span class="pl-c1">text</span>());</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">					year <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">getUTCFullYear</span>();</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">					month <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">getUTCMonth</span>();</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>old<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>new<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">						dir <span class="pl-k">=</span> <span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>old<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">						month <span class="pl-k">=</span> (month <span class="pl-k">+</span> dir <span class="pl-k">+</span> <span class="pl-c1">12</span>) <span class="pl-k">%</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ((dir <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> month <span class="pl-k">===</span> <span class="pl-c1">11</span>) <span class="pl-k">||</span> (dir <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> month <span class="pl-k">===</span> <span class="pl-c1">0</span>)) {</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">							year <span class="pl-k">+=</span> dir;</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">							<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeYear<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>);</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeMonth<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>);</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">_setDate</span>(<span class="pl-en">UTCDate</span>(year, month, day));</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Clicked on a month, year, decade, century</span></td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>month<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">||</span> <span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>year<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">||</span> <span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>decade<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">||</span> <span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>century<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">setUTCDate</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">					day <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">						month <span class="pl-k">=</span> <span class="pl-smi">target</span>.<span class="pl-c1">parent</span>().<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">index</span>(target);</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">						year <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">getUTCFullYear</span>();</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">setUTCMonth</span>(month);</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">						month <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">						year <span class="pl-k">=</span> <span class="pl-c1">Number</span>(<span class="pl-smi">target</span>.<span class="pl-c1">text</span>());</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>.<span class="pl-c1">setUTCFullYear</span>(year);</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">viewModes</span>[<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-smi">e</span>, <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>);</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">===</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">minViewMode</span>){</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">_setDate</span>(<span class="pl-en">UTCDate</span>(year, month, day));</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">setViewMode</span>(<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">_focused_from</span>){</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">_focused_from</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">_focused_from</span>;</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Clicked on prev or next</span></td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">navArrowsClick</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> target <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>);</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> dir <span class="pl-k">=</span> <span class="pl-smi">target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">				dir <span class="pl-k">*=</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-smi">viewModes</span>[<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span>].<span class="pl-smi">navStep</span> <span class="pl-k">*</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">moveMonth</span>(<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>, dir);</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">viewModes</span>[<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span>].<span class="pl-smi">e</span>, <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>);</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_toggle_multidate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>){</td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> ix <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">contains</span>(date);</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>date){</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">clear</span>();</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (ix <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span> <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">toggleActive</span>){</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">remove</span>(ix);</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">clear</span>();</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">push</span>(date);</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">push</span>(date);</td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span> (<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">multidate</span>)</td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">remove</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">_setDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>, <span class="pl-smi">which</span>){</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>which <span class="pl-k">||</span> which <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>date<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">_toggle_multidate</span>(date <span class="pl-k">&amp;&amp;</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(date));</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>which <span class="pl-k">||</span> which <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>view<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> date <span class="pl-k">&amp;&amp;</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(date);</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">setValue</span>();</td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>which <span class="pl-k">||</span> which <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>view<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeDate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">autoclose</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span>which <span class="pl-k">||</span> which <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>date<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">moveDay</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>, <span class="pl-smi">dir</span>){</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> newDate <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(date);</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">newDate</span>.<span class="pl-c1">setUTCDate</span>(<span class="pl-smi">date</span>.<span class="pl-c1">getUTCDate</span>() <span class="pl-k">+</span> dir);</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> newDate;</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">moveWeek</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>, <span class="pl-smi">dir</span>){</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">moveDay</span>(date, dir <span class="pl-k">*</span> <span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">moveMonth</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>, <span class="pl-smi">dir</span>){</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">isValidDate</span>(date))</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">defaultViewDate</span>;</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>dir)</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> date;</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> new_date <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-smi">date</span>.<span class="pl-c1">valueOf</span>()),</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">				day <span class="pl-k">=</span> <span class="pl-smi">new_date</span>.<span class="pl-c1">getUTCDate</span>(),</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">				month <span class="pl-k">=</span> <span class="pl-smi">new_date</span>.<span class="pl-c1">getUTCMonth</span>(),</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">				mag <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">abs</span>(dir),</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">				new_month, test;</td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">			dir <span class="pl-k">=</span> dir <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (mag <span class="pl-k">===</span> <span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">				test <span class="pl-k">=</span> dir <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// If going back one month, make sure month is not current month</span></td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// (eg, Mar 31 -&gt; Feb 31 == Feb 28, not Mar 02)</span></td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">?</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">new_date</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">===</span> month;</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// If going forward one month, make sure month is as expected</span></td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// (eg, Jan 31 -&gt; Feb 31 == Feb 28, not Mar 02)</span></td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">new_date</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">!==</span> new_month;</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">				new_month <span class="pl-k">=</span> month <span class="pl-k">+</span> dir;</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">new_date</span>.<span class="pl-c1">setUTCMonth</span>(new_month);</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Dec -&gt; Jan (12) or Jan -&gt; Dec (-1) -- limit expected date to 0-11</span></td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">				new_month <span class="pl-k">=</span> (new_month <span class="pl-k">+</span> <span class="pl-c1">12</span>) <span class="pl-k">%</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// For magnitudes &gt;1, move one month at a time...</span></td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> mag; i<span class="pl-k">++</span>)</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...</span></td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">					new_date <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">moveMonth</span>(new_date, dir);</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// ...then reset the day, keeping it in the new month</span></td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">				new_month <span class="pl-k">=</span> <span class="pl-smi">new_date</span>.<span class="pl-c1">getUTCMonth</span>();</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">new_date</span>.<span class="pl-c1">setUTCDate</span>(day);</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">test</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> new_month <span class="pl-k">!==</span> <span class="pl-smi">new_date</span>.<span class="pl-c1">getUTCMonth</span>();</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Common date-resetting loop -- if date is beyond end of month, make it</span></td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// end of month</span></td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (<span class="pl-en">test</span>()){</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">new_date</span>.<span class="pl-c1">setUTCDate</span>(<span class="pl-k">--</span>day);</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">new_date</span>.<span class="pl-c1">setUTCMonth</span>(new_month);</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> new_date;</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">moveYear</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>, <span class="pl-smi">dir</span>){</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">moveMonth</span>(date, dir<span class="pl-k">*</span><span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">moveAvailableDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>, <span class="pl-smi">dir</span>, <span class="pl-smi">fn</span>){</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">				date <span class="pl-k">=</span> <span class="pl-v">this</span>[fn](date, dir);</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-en">dateWithinRange</span>(date))</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">				fn <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>moveDay<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (<span class="pl-v">this</span>.<span class="pl-en">dateIsDisabled</span>(date));</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> date;</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">weekOfDateIsDisabled</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>){</td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(<span class="pl-smi">date</span>.<span class="pl-c1">getUTCDay</span>(), <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekDisabled</span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">dateIsDisabled</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>){</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> (</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">weekOfDateIsDisabled</span>(date) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$</span>.<span class="pl-en">grep</span>(<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">datesDisabled</span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-en">isUTCEquals</span>(date, d);</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">				}).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">dateWithinRange</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>){</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> date <span class="pl-k">&gt;=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">startDate</span> <span class="pl-k">&amp;&amp;</span> date <span class="pl-k">&lt;=</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">endDate</span>;</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">keydown</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">40</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">27</span>) { <span class="pl-c">// allow down to re-show picker</span></td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> dateChanged <span class="pl-k">=</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">				dir, newViewDate,</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">				focusDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>;</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">switch</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span>){</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">27</span><span class="pl-k">:</span> <span class="pl-c">// escape</span></td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">focusDate</span>){</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">get</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>;</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">37</span><span class="pl-k">:</span> <span class="pl-c">// left</span></td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">38</span><span class="pl-k">:</span> <span class="pl-c">// up</span></td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">39</span><span class="pl-k">:</span> <span class="pl-c">// right</span></td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">40</span><span class="pl-k">:</span> <span class="pl-c">// down</span></td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">keyboardNavigation</span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">daysOfWeekDisabled</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">7</span>)</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">					dir <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">37</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">38</span> <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">  					<span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">ctrlKey</span>){</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">  						newViewDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">moveAvailableDate</span>(focusDate, dir, <span class="pl-s"><span class="pl-pds">&#39;</span>moveYear<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">  						<span class="pl-k">if</span> (newViewDate)</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">  							<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeYear<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>);</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">  					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">shiftKey</span>){</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">  						newViewDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">moveAvailableDate</span>(focusDate, dir, <span class="pl-s"><span class="pl-pds">&#39;</span>moveMonth<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">  						<span class="pl-k">if</span> (newViewDate)</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">  							<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeMonth<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>);</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">  					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">37</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">39</span>){</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">  						newViewDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">moveAvailableDate</span>(focusDate, dir, <span class="pl-s"><span class="pl-pds">&#39;</span>moveDay<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">  					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-en">weekOfDateIsDisabled</span>(focusDate)){</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">  						newViewDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">moveAvailableDate</span>(focusDate, dir, <span class="pl-s"><span class="pl-pds">&#39;</span>moveWeek<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">  					}</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">38</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">40</span>) {</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">              dir <span class="pl-k">=</span> dir <span class="pl-k">*</span> <span class="pl-c1">4</span>;</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">            newViewDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">moveAvailableDate</span>(focusDate, dir, <span class="pl-s"><span class="pl-pds">&#39;</span>moveMonth<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">===</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">38</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">40</span>) {</td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">              dir <span class="pl-k">=</span> dir <span class="pl-k">*</span> <span class="pl-c1">4</span>;</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">            newViewDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">moveAvailableDate</span>(focusDate, dir, <span class="pl-s"><span class="pl-pds">&#39;</span>moveYear<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (newViewDate){</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> newViewDate;</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">setValue</span>();</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-c">// enter</span></td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">forceParse</span>)</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">					focusDate <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">get</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>;</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">keyboardNavigation</span>) {</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">						<span class="pl-v">this</span>.<span class="pl-en">_toggle_multidate</span>(focusDate);</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">						dateChanged <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">get</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>;</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">setValue</span>();</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">picker</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">o</span>.<span class="pl-smi">autoclose</span>)</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">							<span class="pl-v">this</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-c">// tab</span></td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">focusDate</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">viewDate</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-en">get</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-smi">viewDate</span>;</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (dateChanged){</td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">dates</span>.<span class="pl-c1">length</span>)</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeDate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>clearDate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">inputField</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setViewMode</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">viewMode</span>){</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span> <span class="pl-k">=</span> viewMode;</td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">picker</span></td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">hide</span>()</td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.datepicker-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-smi">viewModes</span>[<span class="pl-v">this</span>.<span class="pl-smi">viewMode</span>].<span class="pl-smi">clsName</span>)</td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">updateNavArrows</span>();</td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> <span class="pl-en">DateRangePicker</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">options</span>){</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-c1">data</span>(element, <span class="pl-s"><span class="pl-pds">&#39;</span>datepicker<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">element</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(element);</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">inputs</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-smi">options</span>.<span class="pl-smi">inputs</span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">i</span>.<span class="pl-smi">jquery</span> <span class="pl-k">?</span> i[<span class="pl-c1">0</span>] <span class="pl-k">:</span> i;</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">delete</span> <span class="pl-smi">options</span>.<span class="pl-smi">inputs</span>;</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">keepEmptyValues</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">keepEmptyValues</span>;</td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">delete</span> <span class="pl-smi">options</span>.<span class="pl-smi">keepEmptyValues</span>;</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">datepickerPlugin</span>.<span class="pl-c1">call</span>(<span class="pl-en">$</span>(<span class="pl-v">this</span>.<span class="pl-smi">inputs</span>), options)</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>changeDate<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-v">this</span>.<span class="pl-smi">dateUpdated</span>, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">pickers</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">inputs</span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-c1">data</span>(i, <span class="pl-s"><span class="pl-pds">&#39;</span>datepicker<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">updateDates</span>();</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">DateRangePicker</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateDates</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">dates</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">pickers</span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">i</span>.<span class="pl-c1">getUTCDate</span>();</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">updateRanges</span>();</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateRanges</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> range <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">dates</span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>){</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">valueOf</span>();</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-v">this</span>.<span class="pl-smi">pickers</span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">p</span>){</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">p</span>.<span class="pl-en">setRange</span>(range);</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">dateUpdated</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// `this.updating` is a workaround for preventing infinite recursion</span></td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// between `changeDate` triggering and `setUTCDate` calling.  Until</span></td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// there is a better mechanism.</span></td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">updating</span>)</td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">updating</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> dp <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-c1">data</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>datepicker<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (dp <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> new_date <span class="pl-k">=</span> <span class="pl-smi">dp</span>.<span class="pl-c1">getUTCDate</span>(),</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">				keep_empty_values <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">keepEmptyValues</span>,</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">				i <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>, <span class="pl-v">this</span>.<span class="pl-smi">inputs</span>),</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">				j <span class="pl-k">=</span> i <span class="pl-k">-</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">				k <span class="pl-k">=</span> i <span class="pl-k">+</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">				l <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">inputs</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (i <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-v">this</span>.<span class="pl-smi">pickers</span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">p</span>){</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">p</span>.<span class="pl-c1">getUTCDate</span>() <span class="pl-k">&amp;&amp;</span> (p <span class="pl-k">===</span> dp <span class="pl-k">||</span> <span class="pl-k">!</span>keep_empty_values))</td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">p</span>.<span class="pl-c1">setUTCDate</span>(new_date);</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (new_date <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>[j]){</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Date being moved earlier/left</span></td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span> (j <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> new_date <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>[j]){</td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">pickers</span>[j<span class="pl-k">--</span>].<span class="pl-c1">setUTCDate</span>(new_date);</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (new_date <span class="pl-k">&gt;</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>[k]){</td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Date being moved later/right</span></td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span> (k <span class="pl-k">&lt;</span> l <span class="pl-k">&amp;&amp;</span> new_date <span class="pl-k">&gt;</span> <span class="pl-v">this</span>.<span class="pl-smi">dates</span>[k]){</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">pickers</span>[k<span class="pl-k">++</span>].<span class="pl-c1">setUTCDate</span>(new_date);</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">updateDates</span>();</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">updating</span>;</td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">destroy</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-v">this</span>.<span class="pl-smi">pickers</span>, <span class="pl-k">function</span>(<span class="pl-smi">p</span>){ <span class="pl-smi">p</span>.<span class="pl-en">destroy</span>(); });</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">data</span>().<span class="pl-smi">datepicker</span>;</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">		remove<span class="pl-k">:</span> <span class="pl-en">alias</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>destroy<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">opts_from_el</span>(<span class="pl-smi">el</span>, <span class="pl-smi">prefix</span>){</td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Derive options from element data-attrs</span></td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-en">$</span>(el).<span class="pl-c1">data</span>(),</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">			out <span class="pl-k">=</span> {}, inkey,</td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">			replace <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">prefix</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>([A-Z])<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">		prefix <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">prefix</span>.<span class="pl-c1">toLowerCase</span>());</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">re_lower</span>(<span class="pl-smi">_</span>,<span class="pl-smi">a</span>){</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> data)</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">prefix</span>.<span class="pl-c1">test</span>(key)){</td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">				inkey <span class="pl-k">=</span> <span class="pl-smi">key</span>.<span class="pl-c1">replace</span>(replace, re_lower);</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">				out[inkey] <span class="pl-k">=</span> data[key];</td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> out;</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">opts_from_locale</span>(<span class="pl-smi">lang</span>){</td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Derive options from locale plugins</span></td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> out <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Check if &quot;de-DE&quot; style date is available, if not language should</span></td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// fallback to 2 letter code eg &quot;de&quot;</span></td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>dates[lang]){</td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">			lang <span class="pl-k">=</span> <span class="pl-smi">lang</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>dates[lang])</td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> d <span class="pl-k">=</span> dates[lang];</td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">each</span>(locale_opts, <span class="pl-k">function</span>(<span class="pl-smi">i</span>,<span class="pl-smi">k</span>){</td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (k <span class="pl-k">in</span> d)</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">				out[k] <span class="pl-k">=</span> d[k];</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> out;</td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> old <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span>;</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> <span class="pl-en">datepickerPlugin</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">option</span>){</td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, <span class="pl-v">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">args</span>.<span class="pl-c1">shift</span>();</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> internal_return;</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">				data <span class="pl-k">=</span> <span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">				options <span class="pl-k">=</span> <span class="pl-k">typeof</span> option <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> option;</td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>data){</td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> elopts <span class="pl-k">=</span> <span class="pl-en">opts_from_el</span>(<span class="pl-v">this</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>date<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// Preliminary otions</span></td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code blob-code-inner js-file-line">					xopts <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({}, defaults, elopts, options),</td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code blob-code-inner js-file-line">					locopts <span class="pl-k">=</span> <span class="pl-en">opts_from_locale</span>(<span class="pl-smi">xopts</span>.<span class="pl-c1">language</span>),</td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// Options priority: js args, data-attrs, locales, defaults</span></td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code blob-code-inner js-file-line">					opts <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({}, defaults, locopts, elopts, options);</td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">$this</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input-daterange<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-smi">opts</span>.<span class="pl-smi">inputs</span>){</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$</span>.<span class="pl-en">extend</span>(opts, {</td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">						inputs<span class="pl-k">:</span> <span class="pl-smi">opts</span>.<span class="pl-smi">inputs</span> <span class="pl-k">||</span> <span class="pl-smi">$this</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>).<span class="pl-en">toArray</span>()</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">					data <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DateRangePicker</span>(<span class="pl-v">this</span>, opts);</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">					data <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Datepicker</span>(<span class="pl-v">this</span>, opts);</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker<span class="pl-pds">&#39;</span></span>, data);</td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> option <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> data[option] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">				internal_return <span class="pl-k">=</span> data[option].<span class="pl-c1">apply</span>(data, args);</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (</td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">			internal_return <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">			internal_return <span class="pl-k">instanceof</span> Datepicker <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">			internal_return <span class="pl-k">instanceof</span> DateRangePicker</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">		)</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Using only allowed for the collection of a single element (<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> function)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> internal_return;</td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span> <span class="pl-k">=</span> datepickerPlugin;</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> defaults <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span>.<span class="pl-smi">defaults</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code blob-code-inner js-file-line">		assumeNearbyYear<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code blob-code-inner js-file-line">		autoclose<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code blob-code-inner js-file-line">		beforeShowDay<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">noop</span>,</td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code blob-code-inner js-file-line">		beforeShowMonth<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">noop</span>,</td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code blob-code-inner js-file-line">		beforeShowYear<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">noop</span>,</td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code blob-code-inner js-file-line">		beforeShowDecade<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">noop</span>,</td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code blob-code-inner js-file-line">		beforeShowCentury<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">noop</span>,</td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code blob-code-inner js-file-line">		calendarWeeks<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">		clearBtn<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">		toggleActive<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">		daysOfWeekDisabled<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">		daysOfWeekHighlighted<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">		datesDisabled<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">		endDate<span class="pl-k">:</span> <span class="pl-c1">Infinity</span>,</td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">		forceParse<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">		format<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mm/dd/yyyy<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">		keepEmptyValues<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">		keyboardNavigation<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">		language<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>en<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">		minViewMode<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">		maxViewMode<span class="pl-k">:</span> <span class="pl-c1">4</span>,</td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line">		multidate<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line">		multidateSeparator<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line">		orientation<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">		rtl<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">		startDate<span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span>,</td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">		startView<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line">		todayBtn<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">		todayHighlight<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code blob-code-inner js-file-line">		weekStart<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code blob-code-inner js-file-line">		disableTouchKeyboard<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code blob-code-inner js-file-line">		enableOnReadonly<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code blob-code-inner js-file-line">		showOnFocus<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code blob-code-inner js-file-line">		zIndexOffset<span class="pl-k">:</span> <span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code blob-code-inner js-file-line">		container<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code blob-code-inner js-file-line">		immediateUpdates<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code blob-code-inner js-file-line">		dateCells<span class="pl-k">:</span><span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code blob-code-inner js-file-line">		title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code blob-code-inner js-file-line">		templates<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code blob-code-inner js-file-line">			leftArrow<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;laquo;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code blob-code-inner js-file-line">			rightArrow<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;raquo;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> locale_opts <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span>.<span class="pl-smi">locale_opts</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>format<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>rtl<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>weekStart<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code blob-code-inner js-file-line">	];</td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span>.<span class="pl-smi">Constructor</span> <span class="pl-k">=</span> Datepicker;</td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> dates <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span>.<span class="pl-smi">dates</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code blob-code-inner js-file-line">		en<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code blob-code-inner js-file-line">			days<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Sunday<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Monday<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Tuesday<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Wednesday<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Thursday<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Friday<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Saturday<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code blob-code-inner js-file-line">			daysShort<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Sun<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Mon<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Tue<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Wed<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Thu<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Fri<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Sat<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code blob-code-inner js-file-line">			daysMin<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Su<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Mo<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Tu<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>We<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Th<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Fr<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Sa<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code blob-code-inner js-file-line">			months<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>January<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>February<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>March<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>April<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>May<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>June<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>July<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>August<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>September<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>October<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>November<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>December<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code blob-code-inner js-file-line">			monthsShort<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Jan<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Feb<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Mar<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Apr<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>May<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Jun<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Jul<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Aug<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Sep<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Oct<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Nov<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Dec<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code blob-code-inner js-file-line">			today<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Today<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code blob-code-inner js-file-line">			clear<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Clear<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code blob-code-inner js-file-line">			titleFormat<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>MM yyyy<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> DPGlobal <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code blob-code-inner js-file-line">		viewModes<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code blob-code-inner js-file-line">			{</td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code blob-code-inner js-file-line">				names<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>days<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>month<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code blob-code-inner js-file-line">				clsName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>days<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code blob-code-inner js-file-line">				e<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>changeMonth<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code blob-code-inner js-file-line">			{</td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code blob-code-inner js-file-line">				names<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>year<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code blob-code-inner js-file-line">				clsName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code blob-code-inner js-file-line">				e<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>changeYear<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code blob-code-inner js-file-line">				navStep<span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code blob-code-inner js-file-line">			{</td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code blob-code-inner js-file-line">				names<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>years<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>decade<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code blob-code-inner js-file-line">				clsName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>years<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code blob-code-inner js-file-line">				e<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>changeDecade<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code blob-code-inner js-file-line">				navStep<span class="pl-k">:</span> <span class="pl-c1">10</span></td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code blob-code-inner js-file-line">			{</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code blob-code-inner js-file-line">				names<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>decades<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>century<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code blob-code-inner js-file-line">				clsName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>decades<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code blob-code-inner js-file-line">				e<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>changeCentury<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code blob-code-inner js-file-line">				navStep<span class="pl-k">:</span> <span class="pl-c1">100</span></td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code blob-code-inner js-file-line">			{</td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code blob-code-inner js-file-line">				names<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>centuries<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>millennium<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code blob-code-inner js-file-line">				clsName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>centuries<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code blob-code-inner js-file-line">				e<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>changeMillennium<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code blob-code-inner js-file-line">				navStep<span class="pl-k">:</span> <span class="pl-c1">1000</span></td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code blob-code-inner js-file-line">		],</td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code blob-code-inner js-file-line">		validParts<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>dd<span class="pl-k">?</span><span class="pl-k">|</span>DD<span class="pl-k">?</span><span class="pl-k">|</span>mm<span class="pl-k">?</span><span class="pl-k">|</span>MM<span class="pl-k">?</span><span class="pl-k">|</span>yy(?:yy)<span class="pl-k">?</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code blob-code-inner js-file-line">		nonpunctuation<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1"> -<span class="pl-cce">\/</span>:-@</span><span class="pl-cce">\u</span>5e74<span class="pl-cce">\u</span>6708<span class="pl-cce">\u</span>65e5<span class="pl-c1"><span class="pl-cce">\[</span>-`{-~</span><span class="pl-cce">\t\n\r</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">parseFormat</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">format</span>){</td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-smi">format</span>.<span class="pl-smi">toValue</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">format</span>.<span class="pl-smi">toDisplay</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> format;</td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// IE treats \0 as a string end in inputs (truncating the value),</span></td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// so it&#39;s a bad format delimiter, anyway</span></td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> separators <span class="pl-k">=</span> <span class="pl-smi">format</span>.<span class="pl-c1">replace</span>(<span class="pl-v">this</span>.<span class="pl-smi">validParts</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\0</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\0</span><span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code blob-code-inner js-file-line">				parts <span class="pl-k">=</span> <span class="pl-smi">format</span>.<span class="pl-c1">match</span>(<span class="pl-v">this</span>.<span class="pl-smi">validParts</span>);</td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>separators <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">separators</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-k">!</span>parts <span class="pl-k">||</span> <span class="pl-smi">parts</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid date format.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {separators<span class="pl-k">:</span> separators, parts<span class="pl-k">:</span> parts};</td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">parseDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>, <span class="pl-smi">format</span>, <span class="pl-smi">language</span>, <span class="pl-smi">assumeNearby</span>){</td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>date)</td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (date <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span>)</td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> date;</td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> format <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code blob-code-inner js-file-line">				format <span class="pl-k">=</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">parseFormat</span>(format);</td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">format</span>.<span class="pl-smi">toValue</span>)</td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">format</span>.<span class="pl-en">toValue</span>(date, format, language);</td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> part_re <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-c1">\-+</span>]</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)(<span class="pl-c1">[dmwy]</span>)<span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code blob-code-inner js-file-line">				parts <span class="pl-k">=</span> <span class="pl-smi">date</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-c1">\-+</span>]</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)(<span class="pl-c1">[dmwy]</span>)<span class="pl-pds">/</span>g</span>),</td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code blob-code-inner js-file-line">				fn_map <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code blob-code-inner js-file-line">					d<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>moveDay<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code blob-code-inner js-file-line">					m<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>moveMonth<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code blob-code-inner js-file-line">					w<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>moveWeek<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code blob-code-inner js-file-line">					y<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>moveYear<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code blob-code-inner js-file-line">				dateAliases <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code blob-code-inner js-file-line">					yesterday<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-1d<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code blob-code-inner js-file-line">					today<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>+0d<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code blob-code-inner js-file-line">					tomorrow<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>+1d<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code blob-code-inner js-file-line">				part, dir, i, fn;</td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\-+</span>]</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-c1">[dmwy]</span>(<span class="pl-c1">[<span class="pl-c1">\s</span>,]</span><span class="pl-k">+</span><span class="pl-c1">[<span class="pl-c1">\-+</span>]</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-c1">[dmwy]</span>)<span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(date)){</td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code blob-code-inner js-file-line">				date <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">parts</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code blob-code-inner js-file-line">					part <span class="pl-k">=</span> <span class="pl-smi">part_re</span>.<span class="pl-c1">exec</span>(parts[i]);</td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code blob-code-inner js-file-line">					dir <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(part[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code blob-code-inner js-file-line">					fn <span class="pl-k">=</span> fn_map[part[<span class="pl-c1">2</span>]];</td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code blob-code-inner js-file-line">					date <span class="pl-k">=</span> <span class="pl-smi">Datepicker</span>.<span class="pl-c1">prototype</span>[fn](date, dir);</td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-en">UTCDate</span>(<span class="pl-smi">date</span>.<span class="pl-c1">getUTCFullYear</span>(), <span class="pl-smi">date</span>.<span class="pl-c1">getUTCMonth</span>(), <span class="pl-smi">date</span>.<span class="pl-c1">getUTCDate</span>());</td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (date <span class="pl-k">in</span> dateAliases) {</td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code blob-code-inner js-file-line">				date <span class="pl-k">=</span> dateAliases[date];</td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code blob-code-inner js-file-line">				parts <span class="pl-k">=</span> <span class="pl-smi">date</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-c1">\-+</span>]</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)(<span class="pl-c1">[dmwy]</span>)<span class="pl-pds">/</span>g</span>);</td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\-+</span>]</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-c1">[dmwy]</span>(<span class="pl-c1">[<span class="pl-c1">\s</span>,]</span><span class="pl-k">+</span><span class="pl-c1">[<span class="pl-c1">\-+</span>]</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-c1">[dmwy]</span>)<span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(date)){</td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code blob-code-inner js-file-line">					date <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">parts</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code blob-code-inner js-file-line">						part <span class="pl-k">=</span> <span class="pl-smi">part_re</span>.<span class="pl-c1">exec</span>(parts[i]);</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code blob-code-inner js-file-line">						dir <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(part[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code blob-code-inner js-file-line">						fn <span class="pl-k">=</span> fn_map[part[<span class="pl-c1">2</span>]];</td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code blob-code-inner js-file-line">						date <span class="pl-k">=</span> <span class="pl-smi">Datepicker</span>.<span class="pl-c1">prototype</span>[fn](date, dir);</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-en">UTCDate</span>(<span class="pl-smi">date</span>.<span class="pl-c1">getUTCFullYear</span>(), <span class="pl-smi">date</span>.<span class="pl-c1">getUTCMonth</span>(), <span class="pl-smi">date</span>.<span class="pl-c1">getUTCDate</span>());</td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code blob-code-inner js-file-line">			parts <span class="pl-k">=</span> date <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">date</span>.<span class="pl-c1">match</span>(<span class="pl-v">this</span>.<span class="pl-smi">nonpunctuation</span>) <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code blob-code-inner js-file-line">			date <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span> <span class="pl-en">applyNearbyYear</span>(<span class="pl-smi">year</span>, <span class="pl-smi">threshold</span>){</td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (threshold <span class="pl-k">===</span> <span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code blob-code-inner js-file-line">					threshold <span class="pl-k">=</span> <span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// if year is 2 digits or less, than the user most likely is trying to get a recent century</span></td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (year <span class="pl-k">&lt;</span> <span class="pl-c1">100</span>){</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code blob-code-inner js-file-line">					year <span class="pl-k">+=</span> <span class="pl-c1">2000</span>;</td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// if the new year is more than threshold years in advance, use last century</span></td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (year <span class="pl-k">&gt;</span> ((<span class="pl-k">new</span> <span class="pl-en">Date</span>()).<span class="pl-c1">getFullYear</span>()<span class="pl-k">+</span>threshold)){</td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code blob-code-inner js-file-line">						year <span class="pl-k">-=</span> <span class="pl-c1">100</span>;</td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> year;</td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> parsed <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code blob-code-inner js-file-line">				setters_order <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>yyyy<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>yy<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>MM<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>mm<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>dd<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code blob-code-inner js-file-line">				setters_map <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">yyyy</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">v</span>){</td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">setUTCFullYear</span>(assumeNearby <span class="pl-k">?</span> <span class="pl-en">applyNearbyYear</span>(v, assumeNearby) <span class="pl-k">:</span> v);</td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">m</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">v</span>){</td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-c1">isNaN</span>(d))</td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span> d;</td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code blob-code-inner js-file-line">						v <span class="pl-k">-=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">while</span> (v <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) v <span class="pl-k">+=</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code blob-code-inner js-file-line">						v <span class="pl-k">%=</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">d</span>.<span class="pl-c1">setUTCMonth</span>(v);</td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">while</span> (<span class="pl-smi">d</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">!==</span> v)</td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">d</span>.<span class="pl-c1">setUTCDate</span>(<span class="pl-smi">d</span>.<span class="pl-c1">getUTCDate</span>()<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> d;</td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">d</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">v</span>){</td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">setUTCDate</span>(v);</td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code blob-code-inner js-file-line">				val, filtered;</td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code blob-code-inner js-file-line">			setters_map[<span class="pl-s"><span class="pl-pds">&#39;</span>yy<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> setters_map[<span class="pl-s"><span class="pl-pds">&#39;</span>yyyy<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code blob-code-inner js-file-line">			setters_map[<span class="pl-s"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> setters_map[<span class="pl-s"><span class="pl-pds">&#39;</span>MM<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> setters_map[<span class="pl-s"><span class="pl-pds">&#39;</span>mm<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> setters_map[<span class="pl-s"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code blob-code-inner js-file-line">			setters_map[<span class="pl-s"><span class="pl-pds">&#39;</span>dd<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> setters_map[<span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code blob-code-inner js-file-line">			date <span class="pl-k">=</span> <span class="pl-en">UTCToday</span>();</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> fparts <span class="pl-k">=</span> <span class="pl-smi">format</span>.<span class="pl-smi">parts</span>.<span class="pl-c1">slice</span>();</td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Remove noop parts</span></td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">parts</span>.<span class="pl-c1">length</span> <span class="pl-k">!==</span> <span class="pl-smi">fparts</span>.<span class="pl-c1">length</span>){</td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code blob-code-inner js-file-line">				fparts <span class="pl-k">=</span> <span class="pl-en">$</span>(fparts).<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>,<span class="pl-smi">p</span>){</td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(p, setters_order) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code blob-code-inner js-file-line">				}).<span class="pl-en">toArray</span>();</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Process remainder</span></td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span> <span class="pl-en">match_part</span>(){</td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> m <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, parts[i].<span class="pl-c1">length</span>),</td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code blob-code-inner js-file-line">					p <span class="pl-k">=</span> parts[i].<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, <span class="pl-smi">m</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">m</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-smi">p</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">parts</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-smi">fparts</span>.<span class="pl-c1">length</span>){</td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> cnt;</td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1">0</span>, cnt <span class="pl-k">=</span> <span class="pl-smi">fparts</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> cnt; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code blob-code-inner js-file-line">					val <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(parts[i], <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code blob-code-inner js-file-line">					part <span class="pl-k">=</span> fparts[i];</td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-c1">isNaN</span>(val)){</td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">switch</span> (part){</td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>MM<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code blob-code-inner js-file-line">								filtered <span class="pl-k">=</span> <span class="pl-en">$</span>(dates[language].<span class="pl-smi">months</span>).<span class="pl-en">filter</span>(match_part);</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code blob-code-inner js-file-line">								val <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(filtered[<span class="pl-c1">0</span>], dates[language].<span class="pl-smi">months</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code blob-code-inner js-file-line">								filtered <span class="pl-k">=</span> <span class="pl-en">$</span>(dates[language].<span class="pl-smi">monthsShort</span>).<span class="pl-en">filter</span>(match_part);</td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code blob-code-inner js-file-line">								val <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(filtered[<span class="pl-c1">0</span>], dates[language].<span class="pl-smi">monthsShort</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code blob-code-inner js-file-line">					parsed[part] <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> _date, s;</td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">setters_order</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code blob-code-inner js-file-line">					s <span class="pl-k">=</span> setters_order[i];</td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (s <span class="pl-k">in</span> parsed <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(parsed[s])){</td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code blob-code-inner js-file-line">						_date <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(date);</td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code blob-code-inner js-file-line">						setters_map[s](_date, parsed[s]);</td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">isNaN</span>(_date))</td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code blob-code-inner js-file-line">							date <span class="pl-k">=</span> _date;</td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> date;</td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">formatDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">date</span>, <span class="pl-smi">format</span>, <span class="pl-smi">language</span>){</td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>date)</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> format <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code blob-code-inner js-file-line">				format <span class="pl-k">=</span> <span class="pl-smi">DPGlobal</span>.<span class="pl-en">parseFormat</span>(format);</td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">format</span>.<span class="pl-smi">toDisplay</span>)</td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">format</span>.<span class="pl-en">toDisplay</span>(date, format, language);</td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> val <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code blob-code-inner js-file-line">				d<span class="pl-k">:</span> <span class="pl-smi">date</span>.<span class="pl-c1">getUTCDate</span>(),</td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code blob-code-inner js-file-line">				D<span class="pl-k">:</span> dates[language].<span class="pl-smi">daysShort</span>[<span class="pl-smi">date</span>.<span class="pl-c1">getUTCDay</span>()],</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code blob-code-inner js-file-line">				DD<span class="pl-k">:</span> dates[language].<span class="pl-smi">days</span>[<span class="pl-smi">date</span>.<span class="pl-c1">getUTCDay</span>()],</td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code blob-code-inner js-file-line">				m<span class="pl-k">:</span> <span class="pl-smi">date</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">+</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code blob-code-inner js-file-line">				M<span class="pl-k">:</span> dates[language].<span class="pl-smi">monthsShort</span>[<span class="pl-smi">date</span>.<span class="pl-c1">getUTCMonth</span>()],</td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code blob-code-inner js-file-line">				MM<span class="pl-k">:</span> dates[language].<span class="pl-smi">months</span>[<span class="pl-smi">date</span>.<span class="pl-c1">getUTCMonth</span>()],</td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code blob-code-inner js-file-line">				yy<span class="pl-k">:</span> <span class="pl-smi">date</span>.<span class="pl-c1">getUTCFullYear</span>().<span class="pl-c1">toString</span>().<span class="pl-c1">substring</span>(<span class="pl-c1">2</span>),</td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code blob-code-inner js-file-line">				yyyy<span class="pl-k">:</span> <span class="pl-smi">date</span>.<span class="pl-c1">getUTCFullYear</span>()</td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">val</span>.<span class="pl-smi">dd</span> <span class="pl-k">=</span> (<span class="pl-smi">val</span>.<span class="pl-smi">d</span> <span class="pl-k">&lt;</span> <span class="pl-c1">10</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-smi">val</span>.<span class="pl-smi">d</span>;</td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">val</span>.<span class="pl-smi">mm</span> <span class="pl-k">=</span> (<span class="pl-smi">val</span>.<span class="pl-smi">m</span> <span class="pl-k">&lt;</span> <span class="pl-c1">10</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-smi">val</span>.<span class="pl-smi">m</span>;</td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code blob-code-inner js-file-line">			date <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> seps <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>([], <span class="pl-smi">format</span>.<span class="pl-smi">separators</span>);</td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, cnt <span class="pl-k">=</span> <span class="pl-smi">format</span>.<span class="pl-smi">parts</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;=</span> cnt; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">seps</span>.<span class="pl-c1">length</span>)</td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">date</span>.<span class="pl-c1">push</span>(<span class="pl-smi">seps</span>.<span class="pl-c1">shift</span>());</td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">date</span>.<span class="pl-c1">push</span>(val[<span class="pl-smi">format</span>.<span class="pl-smi">parts</span>[i]]);</td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">date</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code blob-code-inner js-file-line">		headTemplate<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;thead&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code blob-code-inner js-file-line">			              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code blob-code-inner js-file-line">			                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th colspan=&quot;7&quot; class=&quot;datepicker-title&quot;&gt;&lt;/th&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code blob-code-inner js-file-line">			              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1936" class="blob-num js-line-number" data-line-number="1936"></td>
        <td id="LC1936" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1937" class="blob-num js-line-number" data-line-number="1937"></td>
        <td id="LC1937" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th class=&quot;prev&quot;&gt;&amp;laquo;&lt;/th&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1938" class="blob-num js-line-number" data-line-number="1938"></td>
        <td id="LC1938" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th colspan=&quot;5&quot; class=&quot;datepicker-switch&quot;&gt;&lt;/th&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1939" class="blob-num js-line-number" data-line-number="1939"></td>
        <td id="LC1939" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th class=&quot;next&quot;&gt;&amp;raquo;&lt;/th&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1940" class="blob-num js-line-number" data-line-number="1940"></td>
        <td id="LC1940" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1941" class="blob-num js-line-number" data-line-number="1941"></td>
        <td id="LC1941" class="blob-code blob-code-inner js-file-line">						<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/thead&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1942" class="blob-num js-line-number" data-line-number="1942"></td>
        <td id="LC1942" class="blob-code blob-code-inner js-file-line">		contTemplate<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tbody&gt;&lt;tr&gt;&lt;td colspan=&quot;7&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1943" class="blob-num js-line-number" data-line-number="1943"></td>
        <td id="LC1943" class="blob-code blob-code-inner js-file-line">		footTemplate<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tfoot&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1944" class="blob-num js-line-number" data-line-number="1944"></td>
        <td id="LC1944" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1945" class="blob-num js-line-number" data-line-number="1945"></td>
        <td id="LC1945" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th colspan=&quot;7&quot; class=&quot;today&quot;&gt;&lt;/th&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1946" class="blob-num js-line-number" data-line-number="1946"></td>
        <td id="LC1946" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1947" class="blob-num js-line-number" data-line-number="1947"></td>
        <td id="LC1947" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1948" class="blob-num js-line-number" data-line-number="1948"></td>
        <td id="LC1948" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th colspan=&quot;7&quot; class=&quot;clear&quot;&gt;&lt;/th&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1949" class="blob-num js-line-number" data-line-number="1949"></td>
        <td id="LC1949" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1950" class="blob-num js-line-number" data-line-number="1950"></td>
        <td id="LC1950" class="blob-code blob-code-inner js-file-line">						<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tfoot&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1951" class="blob-num js-line-number" data-line-number="1951"></td>
        <td id="LC1951" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1952" class="blob-num js-line-number" data-line-number="1952"></td>
        <td id="LC1952" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">template</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;datepicker&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1953" class="blob-num js-line-number" data-line-number="1953"></td>
        <td id="LC1953" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;datepicker-days&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1954" class="blob-num js-line-number" data-line-number="1954"></td>
        <td id="LC1954" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;table class=&quot;table-condensed&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1955" class="blob-num js-line-number" data-line-number="1955"></td>
        <td id="LC1955" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">headTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1956" class="blob-num js-line-number" data-line-number="1956"></td>
        <td id="LC1956" class="blob-code blob-code-inner js-file-line">									<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tbody&gt;&lt;/tbody&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1957" class="blob-num js-line-number" data-line-number="1957"></td>
        <td id="LC1957" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">footTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1958" class="blob-num js-line-number" data-line-number="1958"></td>
        <td id="LC1958" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/table&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1959" class="blob-num js-line-number" data-line-number="1959"></td>
        <td id="LC1959" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1960" class="blob-num js-line-number" data-line-number="1960"></td>
        <td id="LC1960" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;datepicker-months&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1961" class="blob-num js-line-number" data-line-number="1961"></td>
        <td id="LC1961" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;table class=&quot;table-condensed&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1962" class="blob-num js-line-number" data-line-number="1962"></td>
        <td id="LC1962" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">headTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1963" class="blob-num js-line-number" data-line-number="1963"></td>
        <td id="LC1963" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">contTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1964" class="blob-num js-line-number" data-line-number="1964"></td>
        <td id="LC1964" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">footTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1965" class="blob-num js-line-number" data-line-number="1965"></td>
        <td id="LC1965" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/table&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1966" class="blob-num js-line-number" data-line-number="1966"></td>
        <td id="LC1966" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1967" class="blob-num js-line-number" data-line-number="1967"></td>
        <td id="LC1967" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;datepicker-years&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1968" class="blob-num js-line-number" data-line-number="1968"></td>
        <td id="LC1968" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;table class=&quot;table-condensed&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1969" class="blob-num js-line-number" data-line-number="1969"></td>
        <td id="LC1969" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">headTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1970" class="blob-num js-line-number" data-line-number="1970"></td>
        <td id="LC1970" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">contTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1971" class="blob-num js-line-number" data-line-number="1971"></td>
        <td id="LC1971" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">footTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1972" class="blob-num js-line-number" data-line-number="1972"></td>
        <td id="LC1972" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/table&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1973" class="blob-num js-line-number" data-line-number="1973"></td>
        <td id="LC1973" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1974" class="blob-num js-line-number" data-line-number="1974"></td>
        <td id="LC1974" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;datepicker-decades&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1975" class="blob-num js-line-number" data-line-number="1975"></td>
        <td id="LC1975" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;table class=&quot;table-condensed&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1976" class="blob-num js-line-number" data-line-number="1976"></td>
        <td id="LC1976" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">headTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1977" class="blob-num js-line-number" data-line-number="1977"></td>
        <td id="LC1977" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">contTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1978" class="blob-num js-line-number" data-line-number="1978"></td>
        <td id="LC1978" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">footTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1979" class="blob-num js-line-number" data-line-number="1979"></td>
        <td id="LC1979" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/table&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1980" class="blob-num js-line-number" data-line-number="1980"></td>
        <td id="LC1980" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1981" class="blob-num js-line-number" data-line-number="1981"></td>
        <td id="LC1981" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;datepicker-centuries&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1982" class="blob-num js-line-number" data-line-number="1982"></td>
        <td id="LC1982" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;table class=&quot;table-condensed&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1983" class="blob-num js-line-number" data-line-number="1983"></td>
        <td id="LC1983" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">headTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1984" class="blob-num js-line-number" data-line-number="1984"></td>
        <td id="LC1984" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">contTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1985" class="blob-num js-line-number" data-line-number="1985"></td>
        <td id="LC1985" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">DPGlobal</span>.<span class="pl-smi">footTemplate</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1986" class="blob-num js-line-number" data-line-number="1986"></td>
        <td id="LC1986" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/table&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1987" class="blob-num js-line-number" data-line-number="1987"></td>
        <td id="LC1987" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1988" class="blob-num js-line-number" data-line-number="1988"></td>
        <td id="LC1988" class="blob-code blob-code-inner js-file-line">						<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1989" class="blob-num js-line-number" data-line-number="1989"></td>
        <td id="LC1989" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1990" class="blob-num js-line-number" data-line-number="1990"></td>
        <td id="LC1990" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span>.<span class="pl-smi">DPGlobal</span> <span class="pl-k">=</span> DPGlobal;</td>
      </tr>
      <tr>
        <td id="L1991" class="blob-num js-line-number" data-line-number="1991"></td>
        <td id="LC1991" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1992" class="blob-num js-line-number" data-line-number="1992"></td>
        <td id="LC1992" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1993" class="blob-num js-line-number" data-line-number="1993"></td>
        <td id="LC1993" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">/* DATEPICKER NO CONFLICT</span></td>
      </tr>
      <tr>
        <td id="L1994" class="blob-num js-line-number" data-line-number="1994"></td>
        <td id="LC1994" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	* =================== */</span></td>
      </tr>
      <tr>
        <td id="L1995" class="blob-num js-line-number" data-line-number="1995"></td>
        <td id="LC1995" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1996" class="blob-num js-line-number" data-line-number="1996"></td>
        <td id="LC1996" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span>.<span class="pl-en">noConflict</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1997" class="blob-num js-line-number" data-line-number="1997"></td>
        <td id="LC1997" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span> <span class="pl-k">=</span> old;</td>
      </tr>
      <tr>
        <td id="L1998" class="blob-num js-line-number" data-line-number="1998"></td>
        <td id="LC1998" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L1999" class="blob-num js-line-number" data-line-number="1999"></td>
        <td id="LC1999" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L2000" class="blob-num js-line-number" data-line-number="2000"></td>
        <td id="LC2000" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2001" class="blob-num js-line-number" data-line-number="2001"></td>
        <td id="LC2001" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">/* DATEPICKER VERSION</span></td>
      </tr>
      <tr>
        <td id="L2002" class="blob-num js-line-number" data-line-number="2002"></td>
        <td id="LC2002" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * =================== */</span></td>
      </tr>
      <tr>
        <td id="L2003" class="blob-num js-line-number" data-line-number="2003"></td>
        <td id="LC2003" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">datepicker</span>.<span class="pl-c1">version</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1.7.0-dev<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2004" class="blob-num js-line-number" data-line-number="2004"></td>
        <td id="LC2004" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2005" class="blob-num js-line-number" data-line-number="2005"></td>
        <td id="LC2005" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">/* DATEPICKER DATA-API</span></td>
      </tr>
      <tr>
        <td id="L2006" class="blob-num js-line-number" data-line-number="2006"></td>
        <td id="LC2006" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	* ================== */</span></td>
      </tr>
      <tr>
        <td id="L2007" class="blob-num js-line-number" data-line-number="2007"></td>
        <td id="LC2007" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2008" class="blob-num js-line-number" data-line-number="2008"></td>
        <td id="LC2008" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(</td>
      </tr>
      <tr>
        <td id="L2009" class="blob-num js-line-number" data-line-number="2009"></td>
        <td id="LC2009" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>focus.datepicker.data-api click.datepicker.data-api<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2010" class="blob-num js-line-number" data-line-number="2010"></td>
        <td id="LC2010" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>[data-provide=&quot;datepicker&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2011" class="blob-num js-line-number" data-line-number="2011"></td>
        <td id="LC2011" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L2012" class="blob-num js-line-number" data-line-number="2012"></td>
        <td id="LC2012" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L2013" class="blob-num js-line-number" data-line-number="2013"></td>
        <td id="LC2013" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>datepicker<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L2014" class="blob-num js-line-number" data-line-number="2014"></td>
        <td id="LC2014" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L2015" class="blob-num js-line-number" data-line-number="2015"></td>
        <td id="LC2015" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L2016" class="blob-num js-line-number" data-line-number="2016"></td>
        <td id="LC2016" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// component click requires us to explicitly show it</span></td>
      </tr>
      <tr>
        <td id="L2017" class="blob-num js-line-number" data-line-number="2017"></td>
        <td id="LC2017" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">datepickerPlugin</span>.<span class="pl-c1">call</span>($<span class="pl-v">this</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2018" class="blob-num js-line-number" data-line-number="2018"></td>
        <td id="LC2018" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2019" class="blob-num js-line-number" data-line-number="2019"></td>
        <td id="LC2019" class="blob-code blob-code-inner js-file-line">	);</td>
      </tr>
      <tr>
        <td id="L2020" class="blob-num js-line-number" data-line-number="2020"></td>
        <td id="LC2020" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">$</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L2021" class="blob-num js-line-number" data-line-number="2021"></td>
        <td id="LC2021" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">datepickerPlugin</span>.<span class="pl-c1">call</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-provide=&quot;datepicker-inline&quot;]<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L2022" class="blob-num js-line-number" data-line-number="2022"></td>
        <td id="LC2022" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2023" class="blob-num js-line-number" data-line-number="2023"></td>
        <td id="LC2023" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2024" class="blob-num js-line-number" data-line-number="2024"></td>
        <td id="LC2024" class="blob-code blob-code-inner js-file-line">}));</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.14509s from github-fe164-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-QEzdGt0fcQ2wFqAuXjH/+KkInRT/DCJ9+GK3gIhtt9U=" src="https://assets-cdn.github.com/assets/frameworks-404cdd1add1f710db016a02e5e31fff8a9089d14ff0c227df862b780886db7d5.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-P12elManijHgoufZlzHoZIIaDNvYLSi8aUjvjMRnXws=" src="https://assets-cdn.github.com/assets/github-3f5d9e94c6a78a31e0a2e7d99731e864821a0cdbd82d28bc6948ef8cc4675f0b.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

